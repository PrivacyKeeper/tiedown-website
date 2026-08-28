import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

const FROM = "TieDown.Pro <support@tiedown.pro>";
const TEAM_INBOX = "support@tiedown.pro";
const CONFIRMATION_SUBJECT = "You're on the TieDown.Pro waitlist! 🤠";

/**
 * Deliberately permissive: it rejects the typos people actually make (missing
 * @, missing TLD, stray spaces) without bouncing the unusual but valid
 * addresses a stricter pattern would still get wrong.
 */
const EMAIL_PATTERN = /^[^\s@,;:<>()[\]\\]+@[^\s@.,;:<>()[\]\\]+(?:\.[^\s@.,;:<>()[\]\\]+)+$/;
const MAX_EMAIL_LENGTH = 254;

/**
 * Per-IP throttle. In-memory, so it resets on deploy and counts per serverless
 * instance — enough to blunt casual bot spam on a public form, not a substitute
 * for a shared limiter if the form is ever deliberately targeted.
 */
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (recentSubmissions.get(ip) ?? []).filter(
    (at) => now - at < RATE_WINDOW_MS,
  );
  recent.push(now);
  recentSubmissions.set(ip, recent);

  // Keep the map from growing without bound on a long-lived instance.
  if (recentSubmissions.size > 5000) {
    for (const [key, times] of recentSubmissions) {
      if (times.every((at) => now - at >= RATE_WINDOW_MS)) {
        recentSubmissions.delete(key);
      }
    }
  }

  return recent.length > RATE_LIMIT;
}

function clientIp(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  return (
    forwarded?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown"
  );
}

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);
}

export async function POST(req: NextRequest) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { email, hp_company: honeypot } = (payload ?? {}) as {
    email?: unknown;
    hp_company?: unknown;
  };

  // Honeypot. The field is hidden from real visitors, so anything in it came
  // from a bot — answer as if it worked rather than telling it what tripped.
  // The name is deliberately not "company": browsers autofill organization
  // fields, and a real person whose browser filled it would be dropped here.
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  if (typeof email !== "string") {
    return NextResponse.json(
      { error: "Enter your email address." },
      { status: 400 },
    );
  }

  const address = email.trim().toLowerCase();
  if (address.length > MAX_EMAIL_LENGTH || !EMAIL_PATTERN.test(address)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Waitlist email service is not configured." },
      { status: 503 },
    );
  }

  if (isRateLimited(clientIp(req))) {
    return NextResponse.json(
      { error: "Too many signups from this connection. Try again in a minute." },
      { status: 429 },
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    const confirmation = await resend.emails.send({
      from: FROM,
      to: address,
      replyTo: TEAM_INBOX,
      subject: CONFIRMATION_SUBJECT,
      html: `
        <div style="background-color:#12100e;color:#f4ead9;padding:40px;font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="text-align:center;margin-bottom:30px;">
            <h1 style="color:#e2701f;font-size:28px;margin:0;">TIEDOWN.PRO</h1>
            <p style="color:#ab9a84;font-size:14px;margin-top:5px;">Four skills. One run. No margin.</p>
          </div>
          <h2 style="color:#e2701f;font-size:22px;">You're on the list! 🎉</h2>
          <p style="color:#e2d6c1;font-size:16px;line-height:1.6;">
            Thanks for signing up for early access to <strong style="color:#e2701f;">TieDown.Pro</strong> — the complete platform for headers, heelers, producers, and coaches.
          </p>
          <p style="color:#e2d6c1;font-size:16px;line-height:1.6;">
            Tie-down is the most horse-dependent event in rodeo and the most
            technically compound — score the barrier, catch, get down the rope,
            flank and tie, with no margin anywhere. Nobody has built an app that
            actually measures it. We are.
          </p>
          <h3 style="color:#e2701f;font-size:18px;margin-top:25px;">What's coming:</h3>
          <ul style="color:#e2d6c1;font-size:15px;line-height:1.8;">
            <li>&#9201;&#65039; Your run split into segments — catch, dismount, down the rope, flank, tie</li>
            <li>&#128014; Horse contribution: how much of your time is the horse's stop and rope work</li>
            <li>&#127993; A six-second hold timer that mimics the judge, with a success-rate log</li>
            <li>&#127942; Entries, draws, calf numbers, live results, and payouts</li>
            <li>&#128204; Calf history — speed, kick, duck flags, and average time when drawn</li>
            <li>&#11088; Horse ratings by dimension: score, rate, stop, works the rope</li>
            <li>&#128179; Mount money tracking, so borrowing a horse stops being an argument</li>
            <li>&#128722; A marketplace for calf horses, ropes, piggin' strings, and tack</li>
            <li>&#10084;&#65039; Jerk-down risk flagging — coaching and welfare at the same time</li>
            <li>&#127891; NLBRA, NJHSRA, NHSRA and NIRA standings, coaches, and scholarships</li>
          </ul>
          <p style="color:#e2d6c1;font-size:16px;line-height:1.6;">
            We'll keep you posted on launch updates. Keep swinging. 🤠
          </p>
          <p style="color:#ab9a84;font-size:14px;margin-top:30px;">
            — The TieDown.Pro Team<br/>
            <a href="https://tiedown.pro" style="color:#e2701f;">tiedown.pro</a>
          </p>
          <hr style="border:none;border-top:1px solid #453a2e;margin:30px 0;" />
          <p style="color:#7d6f5e;font-size:12px;text-align:center;">
            &copy; 2026 Apps 1, LLC. All rights reserved.
          </p>
        </div>
      `,
    });

    // Resend resolves with an `error` rather than throwing, so without this
    // check an unverified sending domain or a revoked key would look like a
    // successful signup to the visitor while no mail ever left the building.
    if (confirmation.error) {
      console.error("[waitlist] confirmation send failed", confirmation.error);
      return NextResponse.json(
        {
          error:
            "We couldn't send your confirmation email. Please try again shortly.",
        },
        { status: 502 },
      );
    }

    // The visitor is on the list once their confirmation is away. A failed team
    // ping is ours to spot in the logs, not theirs to retry.
    const notification = await resend.emails.send({
      from: FROM,
      to: TEAM_INBOX,
      replyTo: address,
      subject: "New Waitlist Signup!",
      html: `<p>New waitlist signup: <strong>${escapeHtml(address)}</strong></p>`,
    });

    if (notification.error) {
      console.error("[waitlist] team notification failed", notification.error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[waitlist] unexpected failure", error);
    return NextResponse.json(
      { error: "We couldn't sign you up just now. Please try again shortly." },
      { status: 500 },
    );
  }
}

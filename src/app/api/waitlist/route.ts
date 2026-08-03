import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

function getResendClient() {
  if (!resendApiKey) {
    return null;
  }

  return new Resend(resendApiKey);
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const resend = getResendClient();
    if (!resend) {
      return NextResponse.json(
        { error: "Waitlist email service is not configured." },
        { status: 503 },
      );
    }

    await resend.emails.send({
      from: "TieDown.Pro <support@tiedown.pro>",
      to: email,
      subject: "You're on the TieDown.Pro waitlist! 🤠",
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

    // Also notify the team
    await resend.emails.send({
      from: "TieDown.Pro <support@tiedown.pro>",
      to: "support@tiedown.pro",
      subject: "New Waitlist Signup!",
      html: `<p>New waitlist signup: <strong>${email}</strong></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

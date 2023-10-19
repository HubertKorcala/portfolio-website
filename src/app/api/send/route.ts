import HeroSection from "@/app/components/HeroSection";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = String(process.env.FROM_EMAIL); //to do type check
type Req = {
  body: {
    email: string;
    subject: string;
    message: string;
  };
};

export async function POST(req: Req, res: unknown) {
  const { body } = req;
  const { email, subject, message } = body;

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["korcalahubert@gmail.com", email],
      subject: subject,
      html: `<div>
              <h1>${subject}</h1>
              <p>Thank you for contacting me.</p>
              <p>New message submitted:</p>
               <p>${message}</p>   
            </div>`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

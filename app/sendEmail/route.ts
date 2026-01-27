import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body: {[key: string]: string} = await request.json();
  
  const { data, error } = await resend.emails.send({
    from: 'RiderLinx <onboarding@resend.dev>',
    to: [process.env.RESEND_EMAIL!],
    subject: `Email from ${body["name"]}`,
    html: `<u>Email:</u> ${body["email"]}<br/><u>Org:</u> ${body["org"]}<br/><u>Role:</u> ${body["role"]}<br/><u>Purpose:</u> ${body["purpose"]}<br/><br/><u>Message:</u><br/>${body["message"]}`,
  });
 
  if (error) return new Response(JSON.stringify({msg: error}), {
    status: 500,
    headers: { 'Content-Type': 'application/json' }
  });

  return new Response(JSON.stringify({msg: data}), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

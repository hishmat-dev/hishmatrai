import nodemailer from 'nodemailer';

export async function POST(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Configure your email service
    // Using Gmail SMTP (you'll need to set up app password)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER ,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log(process.env.EMAIL_USER);
    console.log(process.env.EMAIL_PASSWORD);

    // Email to yourself
    const mailOptions = {
      from: email,
      to: 'hishmatdrawarh786@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); padding: 20px; border-radius: 10px; color: white; margin-bottom: 20px;">
            <h2 style="margin: 0; font-size: 24px;">New Contact Form Submission</h2>
          </div>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 15px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 15px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0 0 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <div style="border-top: 1px solid #e5e7eb; padding-top: 15px; font-size: 12px; color: #6b7280;">
            <p style="margin: 0;">This is an automated message from your portfolio contact form.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Auto-reply to sender
    const autoReply = {
      from: 'hishmatdrawarh786@gmail.com',
      to: email,
      subject: 'Thanks for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); padding: 20px; border-radius: 10px; color: white; margin-bottom: 20px;">
            <h2 style="margin: 0; font-size: 24px;">Thank You!</h2>
          </div>
          <div style="line-height: 1.8; color: #333;">
            <p>Hi ${name},</p>
            <p>Thank you for reaching out to me! I really appreciate you taking the time to send me a message.</p>
            <p>I'll get back to you as soon as possible. In the meantime, feel free to connect with me on my social media profiles.</p>
            <p style="margin-top: 30px;">Best regards,<br><strong>Hishmat Rai</strong><br>Full Stack Developer</p>
          </div>
          <div style="border-top: 1px solid #e5e7eb; margin-top: 30px; padding-top: 15px; font-size: 12px; color: #6b7280;">
            <p style="margin: 0;">This is an automated response from my portfolio.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(autoReply);

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Email error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email', details: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

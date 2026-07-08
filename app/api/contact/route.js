import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email sent to you
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;">
          <h2>New Portfolio Contact</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <hr />

          <p><strong>Message:</strong></p>

          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Failed to send message.",
      },
      {
        status: 500,
      }
    );
  }
}
import transporter from "@/app/lib/mailer";

export async function POST(request, response) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;
    if (name === "" || phone === "" || message === "" || email === "") {
      return Response.json({ status: 500, message: "Validation Err" });
    }
    const mailOptions = {
      from: email,
      to: `${process.env.NEXT_APP_EMAIL}`,
      subject: `Message from ${name}`,
      text: `**Name:** ${name}\n**Email:** ${email}\n**Phone:** ${phone}\n\n**Message:**\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return Response.json({ status: 200, message: "Email sent successfully" });
  } catch (error) {
    return Response.json({
      error,
      status: 500,
      message: "Error sending email",
    });
  }
}

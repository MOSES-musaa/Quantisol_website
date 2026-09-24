import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    // Send email through Resend
    const { data, error } = await resend.emails.send({
      from: "Quantsol Website <website@quantsol.co.ke>",
      to: ["info@quantsol.co.ke"],
      replyTo: email.trim(),
      subject: `Website Inquiry from ${name.trim()}`,
      text: `
New website inquiry

Name: ${name.trim()}
Email: ${email.trim()}
Phone: ${phone?.trim() || "Not provided"}

Message:
${message.trim()}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #1f2937;">New Website Inquiry</h2>

          <p>You have received a new message through the Quantsol website.</p>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />

          <p>
            <strong>Name:</strong><br />
            ${name.trim()}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${email.trim()}
          </p>

          <p>
            <strong>Phone:</strong><br />
            ${phone?.trim() || "Not provided"}
          </p>

          <p>
            <strong>Message:</strong><br />
            ${message.trim().replace(/\n/g, "<br />")}
          </p>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />

          <p style="font-size: 13px; color: #777;">
            This message was submitted through the Quantsol website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Unable to send your message. Please try again later.",
      });
    }

    console.log("Email sent successfully:", data?.id);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending your message.",
    });
  }
}
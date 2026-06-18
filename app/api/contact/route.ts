import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, company, email, phone, requestType, message } = data;

    if (!name || !email || !requestType || !message) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "localhost",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"SMART2D Services" <${process.env.SMTP_USER || "noreply@smart2dservices.com"}>`,
      to: process.env.CONTACT_EMAIL || "contact@smart2dservices.com",
      replyTo: email,
      subject: `Nouveau contact depuis le site web : ${requestType}`,
      text: `
        Nouveau message reçu depuis le formulaire de contact du site.

        Nom : ${name}
        Entreprise : ${company || "Non renseignée"}
        Email : ${email}
        Téléphone : ${phone || "Non renseigné"}
        Type de demande : ${requestType}

        Message :
        ${message}
      `,
      html: `
        <h3>Nouveau message depuis le site web SMART2D Services</h3>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Entreprise :</strong> ${company || "Non renseignée"}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <p><strong>Type de demande :</strong> ${requestType}</p>
        <br/>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erreur d'envoi du mail de contact:", error);
    return NextResponse.json(
      { error: "Une erreur s'est produite lors de l'envoi de l'e-mail." },
      { status: 500 }
    );
  }
}

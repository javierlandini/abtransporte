import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method != "POST") {
    return res.status(500).json({ data: "Server error" });
  }
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", body);
  console.log("request: ", req);

  // Anti spam check.
  if (body.email2) {
    return res.status(500).json({ data: "Error en los datos." });
  }

  // Check required data.
  if (!body.nombre || !body.email || !body.telefono) {
    // Sends a HTTP bad request error code
    return res
      .status(400)
      .json({ data: "Nombre, email y teléfono son requeridos." });
  }

  try {
    await sendgrid.send({
      to: process.env.SUPPORT_EMAIL, // Your email where you'll receive emails
      from: {
        email: process.env.NOTIFICATION_EMAIL, // your website email address here
        name: "Notificaciones Sitio Web",
      },
      replyTo: body.email,
      subject: `Contacto desde sitio web`,
      text: `Nombre: ${body.nombre} \n\nTeléfono: ${body.telefono}\n\nEmail: ${body.email}\n\n${body.mensaje}`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ data: error.message });
  }

  // Sends a HTTP success code.
  res
    .status(200)
    .json({ data: `${body.nombre} ${body.email} ${body.telefono}` });
}

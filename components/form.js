import styles from "./form.module.css";
export default function Form() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      nombre: event.target.nombre.value,
      email: event.target.email.value,
      telefono: event.target.telefono.value,
      mensaje: event.target.mensaje.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/form";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    let msg = document.getElementById("message");
    if (response.status == 200) {
      msg.innerHTML = `<span class="${styles.success}">Gracias por su mensaje, nos comunicaremos a la brevedad.</span>`;
    } else {
      msg.innerHTML = `<span class="${styles.error}">Hubo un error, por favor intente nuevamente más tarde o contáctenos por WhatsApp.</span>`;
    }
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    console.log(result);
  };
  return (
    <>
      <form
        className={styles.contactForm}
        onSubmit={handleSubmit}
        action="/api/form"
        method="post"
      >
        <div className={styles.message} id="message"></div>
        <div className={styles.formGroup}>
          <label htmlFor="nombre">Nombre</label>
          <input
            required
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            className={styles.control}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className={styles.control}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="telefono">Teléfono</label>
          <input
            required
            type="text"
            id="telefono"
            name="telefono"
            placeholder="Teléfono"
            className={styles.control}
          />
        </div>
        <div className={styles.formGroup}>
          <textarea
            id="mensaje"
            name="mensaje"
            className={styles.control + " " + styles.textarea}
            placeholder="Consulta"
            rows="4"
          ></textarea>
        </div>
        <div className={styles.formButton}>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
}

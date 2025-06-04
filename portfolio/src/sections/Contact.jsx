export default function Contact() {
  return (
    <>
      <h2>Contact Me</h2>
      <p>Interested in working together? Feel free to reach out!</p>
      <form onSubmit={e => e.preventDefault()}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

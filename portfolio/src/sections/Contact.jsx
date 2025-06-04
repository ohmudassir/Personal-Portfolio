export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700 mb-6 max-w-lg">
        Feel free to reach out via email or social media.
      </p>
      <p className="mb-2">
        <strong>Email:</strong> mudassir@example.com
      </p>
      <p>
        <strong>LinkedIn:</strong>{' '}
        <a href="https://linkedin.com/in/mudassir" className="text-blue-600 hover:underline">
          linkedin.com/in/mudassir
        </a>
      </p>
    </div>
  );
}

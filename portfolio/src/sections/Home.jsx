export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen flex flex-col justify-center">
      <h1 className="text-5xl font-bold mb-6">Hi, I’m Mudassir</h1>
      <p className="text-lg text-gray-700 mb-4">
        Software Engineer with 4 years of IoT and Desktop app experience, 1 year in Web development, and a passion for clean design.
      </p>
      <p className="text-gray-600 mb-8 max-w-lg">
        I build professional, minimal, and functional software solutions with an emphasis on quality and user experience.
      </p>
      <a
        href="/contact"
        className="self-start inline-flex w-auto flex-none bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition text-center"
      >
        Contact Me
      </a>
    </div>
  );
}

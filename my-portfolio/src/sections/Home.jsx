
export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center gap-4"
    >
      <h2 className="text-3xl font-bold">Welcome to My Portfolio</h2>
      <button className="flex items-center gap-2 px-6 py-3 rounded-[24px] bg-primary text-onPrimary shadow-material hover:bg-[#59439A] active:bg-[#45297B] transition">
        Get Started
      </button>
    </section>
  );
}

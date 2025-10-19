import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/next.svg"
          alt="Logo"
          width={180}
          height={38}
          className="dark:invert"
          priority
        />
      </div>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
        Design Patterns
      </h1>

      {/* Subtext */}
      <p className="text-center text-lg sm:text-xl max-w-xl mb-8">
        We're working hard to bring you the best examples of design patterns. Stay tuned for updates!
      </p>

      {/* Footer */}
      <footer className="mt-12 text-sm opacity-80 text-center">
        &copy; {new Date().getFullYear()} A GOLD FISH. All rights reserved.
      </footer>
    </div>
  );
}

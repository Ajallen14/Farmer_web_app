import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Export FloatingPaths as a named export
export function FloatingPaths({ position = 1 }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-green-500" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Export Home as the default export
export default function Home() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="container header-container">
          <Link href="/" className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
            >
              <path d="M12 2a9 9 0 0 0-9 9c0 3.6 3.4 8.4 9 11 5.6-2.6 9-7.4 9-11a9 9 0 0 0-9-9z"></path>
              <path d="M12 2v20"></path>
              <path d="M2 12h20"></path>
            </svg>
            <span>FarmConnect</span>
          </Link>
          <nav className="nav-desktop">
            <Link href="#features" className="nav-link">
              Features
            </Link>
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
          </nav>
          <button className="btn btn-outline sign-in-btn">Sign In</button>
          <button className="menu-btn">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>
      <main className="main">
        <section className="hero-section">
          <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0">
              <FloatingPaths position={1} />
              <FloatingPaths position={-1} />
            </div>
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="max-w-4xl mx-auto"
              >
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter text-green-500">
                  Growing Together, Farming Smarter
                </h1>
                <div className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Button
                    variant="ghost"
                    className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-white/95 hover:bg-white/100 text-black transition-all duration-300 group-hover:-translate-y-0.5 border border-black/10 hover:shadow-md"
                  >
                    <span className="opacity-90 group-hover:opacity-100 transition-opacity">Get Started</span>
                    <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                      →
                    </span>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rest of the sections remain unchanged */}
        <section id="features" className="features-section">
          {/* Features content */}
        </section>

        <section className="connect-section">
          {/* Connect content */}
        </section>
      </main>
      <footer className="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
}
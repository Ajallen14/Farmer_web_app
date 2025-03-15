import FloatingPaths from "@/components/floating-paths";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center">
      <FloatingPaths position={1} />
      <div className="z-10 text-cente">
        <h1 className="text-5xl font-bold text-green-500 mb-4">FarmConnect</h1>
        <p className="text-green-300 text-xl">Connecting farmers with technology</p>
      </div>
    </main>
  );
}
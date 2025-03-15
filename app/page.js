import BackgroundPaths from "@/components/floating-paths";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center">
      <BackgroundPaths title="FarmConnect" />
      <div className="z-10 text-center">
        <p className="text-green-300 text-xl">Connecting farmers with technology</p>
      </div>
    </main>
  );
}
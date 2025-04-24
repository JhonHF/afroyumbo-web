import Navbar from "@/features/navbar/ui/navbar";
import HomeContent from "@/features/homeContent/ui/HomeContent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HomeContent />
    </div>
  );
}

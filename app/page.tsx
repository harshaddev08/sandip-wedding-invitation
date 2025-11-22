import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <EventDetails />
      <Gallery />
      <Contact />
      <Location />
      <Footer />
    </main>
  );
}

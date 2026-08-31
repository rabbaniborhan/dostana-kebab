import SubpageHero from "../components/SubpageHero";
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
  

  return (
    <div>
<SubpageHero
        title="Kontakt i lokalizacje"
        breadcrumb="Kontakt"
        subtitle="Skontaktuj się z nami lub znajdź numery telefonów do wszystkich 6 lokalizacji Dostana Kebab w Lublinie!"
      />

      <div className="">
        <ContactSection />
        
        
      </div>
    </div>
  );
}

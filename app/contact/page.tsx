import SubpageHero from "../components/SubpageHero";
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
  

  return (
    <div>
<SubpageHero
        title="Contact & Locations"
        breadcrumb="Contact"
        subtitle="Get in touch with us or find phone numbers for all 6 Dostana Kebab locations in Lublin!"
      />

      <div className="">
        <ContactSection />
        
        
      </div>
    </div>
  );
}

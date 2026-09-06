import SubpageHero from "@/components/SubpageHero";
import GalleryModal from "@/components/GalleryModal";

export default function GalleryPage() {
  return (
    <div>
      <SubpageHero
        title="Galeria dań i restauracji"
        breadcrumb="Galeria"
        subtitle="Zobacz nasze świeże składniki, pieczenie na wglu i pyszne kebaby!"
      />

      <div className="">
        <GalleryModal />
      </div>
    </div>
  );
}

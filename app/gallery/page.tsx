import SubpageHero from "../components/SubpageHero";
import GalleryModal from "../components/GalleryModal";

export default function GalleryPage() {
  return (
    <div>
<SubpageHero
        title="Food & Restaurant Gallery"
        breadcrumb="Gallery"
        subtitle="Take a look at our fresh ingredients, charcoal roasting, and delicious kebab creations!"
      />

      <div className="">
        <GalleryModal />
      </div>
    </div>
  );
}

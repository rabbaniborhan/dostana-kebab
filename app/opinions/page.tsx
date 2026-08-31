import SubpageHero from "../components/SubpageHero";
import ReviewsSection from "../components/ReviewsSection";

export default function OpinionsPage() {
  return (
    <div>
      <SubpageHero
        title="Opinie Klientów"
        breadcrumb="Opinie"
        subtitle="Przeczytaj zweryfikowane opinie od 99,2% zadowolonych miłośników kebaba w Lublinie!"
      />

      <div>
        <ReviewsSection showPattern={true} />
      </div>
    </div>
  );
}

import SubpageHero from "../components/SubpageHero";
import ReviewsSection from "../components/ReviewsSection";

export default function OpinionsPage() {
  return (
    <div>
<SubpageHero
        title="Customer Opinions"
        breadcrumb="Opinions"
        subtitle="Read verified reviews from 99.2% satisfied kebab lovers across Lublin!"
      />

      <div>
        <ReviewsSection showPattern={true} />
      </div>
    </div>
  );
}

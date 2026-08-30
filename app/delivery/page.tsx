import SubpageHero from "../components/SubpageHero";
import DeliverySection from "../components/DeliverySection";

export default function DeliveryPage() {
  return (
    <div>
<SubpageHero
        title="Delivery Information"
        breadcrumb="Delivery"
        subtitle="Express thermal delivery across Lublin. Free delivery on all orders over 150 PLN!"
      />

      <div className="">
        <DeliverySection />
      </div>
    </div>
  );
}

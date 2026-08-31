import SubpageHero from "../components/SubpageHero";
import DeliverySection from "../components/DeliverySection";

export default function DeliveryPage() {
  return (
    <div>
      <SubpageHero
        title="Informacje o dostawie"
        breadcrumb="Dostawa"
        subtitle="Ekspresowa dostawa termiczna w Lublinie. Darmowa dostawa dla wszystkich zamówień powyżej 150 zł!"
      />

      <div className="">
        <DeliverySection />
      </div>
    </div>
  );
}

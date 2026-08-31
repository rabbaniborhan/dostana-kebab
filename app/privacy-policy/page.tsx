import SubpageHero from "../components/SubpageHero";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#121212] min-h-screen text-neutral-200 font-lato">
      <SubpageHero
        title="Polityka prywatności"
        breadcrumb="Polityka prywatności"
        subtitle="Niniejsza polityka prywatności zawiera informacje o przetwarzaniu danych osobowych zgodnie z art. 13 ust. 1 i 2 RODO."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h2 className="font-judson font-bold text-2xl text-white">1. Definicje</h2>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p><strong className="text-white">Administrator Danych Osobowych (&quot;Administrator&quot;)</strong> - oznacza Partnera (NURUCTG SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ) określonego w Regulaminie.</p>
            <p><strong className="text-white">Procesor Danych Osobowych (&quot;Procesor&quot;)</strong> - podmiot, który przetwarza dane Klienta w imieniu Administratora na warunkach określonych w art. 28 RODO. Procesorem w rozumieniu niniejszej polityki prywatności jest Restaumatic SA z siedzibą w Zabrzu (41-800) przy ul. Wolności 345, wpisana do Rejestru Przedsiębiorców KRS pod numerem KRS 0001016935, NIP 6482765571.</p>
            <p><strong className="text-white">Serwis</strong> - oprogramowanie stworzone przez Restaumatic SA działające pod markami Skubacz.pl i Restaumatic.com, wykorzystywane przez Partnera, za pośrednictwem którego Klient może zamawiać produkty i usługi.</p>
            <p><strong className="text-white">Aplikacja Mobilna</strong> – aplikacja na telefony komórkowe i inne urządzenia przenośne, stanowiąca kolejną formę Serwisu Online do składania zamówień.</p>
            <p><strong className="text-white">Dane osobowe</strong> - wszelkie informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej, w tym numer IP urządzenia, dane o lokalizacji, identyfikator internetowy oraz informacje gromadzone za pośrednictwem plików cookies.</p>
            <p><strong className="text-white">RODO</strong> - Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych.</p>
          </div>
        </div>

        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h2 className="font-judson font-bold text-2xl text-white">2. Cele, w których przetwarzane są dane osobowe</h2>
          <p className="text-xs text-[#f26522] font-bold uppercase tracking-wider">W związku z korzystaniem z Serwisu i Aplikacji Mobilnej oraz podstawa prawna przetwarzania danych</p>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              <li>Realizacja zamówienia złożonego przez formularz w celu zakupu towarów i wykonania umowy (art. 6 ust. 1 lit. b RODO).</li>
              <li>Obsługa rezerwacji stolików w Serwisie i Aplikacji (art. 6 ust. 1 lit. b RODO).</li>
              <li>Przetwarzanie płatności online za zamówione produkty (art. 6 ust. 1 lit. b i lit. f RODO).</li>
              <li>Marketing produktów i usług Partnera oraz Administratora (art. 6 ust. 1 lit. f RODO).</li>
              <li>Prowadzenie statystyk i analiz aktywności użytkowników (art. 6 ust. 1 lit. f RODO).</li>
              <li>Ustalenie, dochodzenie lub obrona przed roszczeniami (art. 6 ust. 1 lit. f RODO).</li>
              <li>Wypełnianie obowiązków prawnych nałożonych na Administratora (np. przepisy podatkowe, ustawa o rachunkowości - art. 6 ust. 1 lit. c RODO).</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h3 className="font-judson font-bold text-xl text-[#f26522]">Ad. 1. Przetwarzanie zamówień składanych przez formularz</h3>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p>Administratorem danych przetwarzanych w tym celu jest Partner. Dane są przechowywane przez okres niezbędny do realizacji zamówienia, a następnie do czasu przedawnienia ewentualnych roszczeń lub zgodnie z wymogami przepisów prawa podatkowego.</p>
          </div>
        </div>

        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h3 className="font-judson font-bold text-xl text-[#f26522]">Ad. 2. Obsługa rezerwacji stolików</h3>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p>Podanie danych jest niezbędne do dokonania rezerwacji. Dane są przetwarzane na podstawie art. 6 ust. 1 lit. b RODO i przechowywane do czasu realizacji rezerwacji, a następnie przez 14 dni w celu obsługi ewentualnych reklamacji.</p>
          </div>
        </div>

        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h3 className="font-judson font-bold text-xl text-[#f26522]">Ad. 3. Przetwarzanie płatności online</h3>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p>Dane klientów korzystających z płatności online są przekazywane operatorom płatności (np. PayPro SA / Przelewy24) w celu realizacji transakcji.</p>
          </div>
        </div>

        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h3 className="font-judson font-bold text-xl text-[#f26522]">Ad. 4. Marketing produktów i usług</h3>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p>Dane mogą być przetwarzane w celach marketingowych (wysyłanie powiadomień SMS/e-mail o promocjach) na podstawie dobrowolnie wyrażonej zgody użytkownika. Zgoda ta może być wycofana w każdym momencie.</p>
          </div>
        </div>

        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h2 className="font-judson font-bold text-2xl text-white">3. Pliki cookies i podobna technologia</h2>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p>Serwis wykorzystuje pliki cookies (małe pliki tekstowe zapisywane na urządzeniu użytkownika) w celu prawidłowego działania strony, zapamiętywania preferencji oraz prowadzenia statystyk odwiedzin. Użytkownik może w każdej chwili zmienić ustawienia dotyczące cookies w swojej przeglądarce.</p>
          </div>
        </div>

        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h2 className="font-judson font-bold text-2xl text-white">4. Prawa związane z przetwarzaniem danych osobowych</h2>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p>Osobie, której dane dotyczą, przysługują następujące prawa:</p>
            <ul className="list-decimal pl-6 space-y-2 text-neutral-400">
              <li>Prawo dostępu do swoich danych oraz otrzymania ich kopii.</li>
              <li>Prawo do sprostowania (poprawiania) danych.</li>
              <li>Prawo do usunięcia danych (&quot;prawo do bycia zapomnianym&quot;).</li>
              <li>Prawo do ograniczenia przetwarzania.</li>
              <li>Prawo do przenoszenia danych.</li>
              <li>Prawo do sprzeciwu wobec przetwarzania.</li>
              <li>Prawo do cofnięcia zgody w dowolnym momencie.</li>
              <li>Prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h2 className="font-judson font-bold text-2xl text-white">5. Zgłaszanie żądań związanych z realizacją praw</h2>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p>Wnioski dotyczące realizacji praw można zgłaszać bezpośrednio do Administratora na adres e-mail lub pisemnie na adres: Sympatyczna 5b, 20-530 Lublin. Wnioski rozpatrywane są bez zbędnej zwłoki, nie później niż w ciągu miesiąca.</p>
          </div>
        </div>

        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h2 className="font-judson font-bold text-2xl text-white">6. Transfer danych poza Europejski Obszar Gospodarczy</h2>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p>Dane osobowe są przekazywane poza EOG (np. do dostawców usług takich jak Google) wyłącznie przy zapewnieniu odpowiedniego poziomu ochrony, w oparciu o standardowe klauzule umowne zatwierdzone przez Komisję Europejską.</p>
          </div>
        </div>

        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h2 className="font-judson font-bold text-2xl text-white">7. Bezpieczeństwo danych osobowych</h2>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p>Administrator i Procesor stosują nowoczesne środki techniczne i organizacyjne mające na celu ochronę danych osobowych przed utratą, nieuprawnionym dostępem czy modyfikacją.</p>
          </div>
        </div>

        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h2 className="font-judson font-bold text-2xl text-white">8. Zmiany w Polityce Prywatności</h2>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p>Polityka Prywatności jest na bieżąco weryfikowana i aktualizowana. Aktualna wersja obowiązuje od dnia 18 czerwca 2026 r.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

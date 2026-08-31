import SubpageHero from "../components/SubpageHero";

export default function AccessibilityStatementPage() {
  return (
    <div className="bg-[#121212] min-h-screen text-neutral-200 font-lato">
      <SubpageHero
        title="Deklaracja dostępności"
        breadcrumb="Deklaracja dostępności"
        subtitle="Nasze zobowiązanie do dostępności cyfrowej zgodnie z ustawą z dnia 26 kwietnia 2024 r."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p>NURUCTG SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ zobowiązuje się zapewnić dostępność swojej strony internetowej zgodnie z przepisami ustawy z dnia 26 kwietnia 2024 r. o zapewnianiu spełniania wymagań dostępności niektórych produktów i usług przez podmioty gospodarcze.</p>
            <p>Deklaracja dostępności dotyczy strony internetowej <a href="https://www.dostanakebab.com/" target="_blank" rel="noopener noreferrer" className="text-[#f26522] hover:underline">https://www.dostanakebab.com/</a></p>
            <p><strong className="text-white">Data publikacji strony internetowej:</strong> 28 sierpnia 2026 r.</p>
            <p><strong className="text-white">Data ostatniej istotnej aktualizacji:</strong> 28 sierpnia 2026 r.</p>
          </div>
        </div>
        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h2 className="font-judson font-bold text-2xl text-white">Stan dostępności cyfrowej</h2>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p>Strona internetowa jest częściowo zgodna z ustawą z dnia 26 kwietnia 2024 r. o zapewnianiu spełniania wymagań dostępności niektórych produktów i usług przez podmioty gospodarcze z powodu niezgodności lub wyłączeń wymienionych poniżej.</p>

            <h3 className="text-white font-bold text-base pt-2">Treści niedostępne:</h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              <li><strong className="text-neutral-200">Brak opisów alternatywnych dla niektórych grafik i zdjęć</strong> – niektóre zdjęcia ilustracyjne, w tym te przedstawiające jedzenie lub wnętrze lokalu, nie posiadają tekstów alternatywnych, co może utrudniać ich zrozumienie osobom korzystającym z czytników ekranu.</li>
              <li><strong className="text-neutral-200">Brak transkrypcji lub audiodeskrypcji dla materiałów wideo</strong> – filmy promocyjne lub instruktażowe zamieszczone na stronie nie posiadają transkrypcji ani audiodeskrypcji.</li>
              <li><strong className="text-neutral-200">Częściowy brak obsługi klawiatury dla nieistotnych elementów strony</strong> – niektóre elementy graficzne i nawigacyjne (np. animacje) mogą być niedostępne bez użycia myszy.</li>
              <li><strong className="text-neutral-200">Brak kontrastu i odpowiedniej wielkości czcionki w mniej kluczowych sekcjach</strong> – nie wszystkie elementy spełniają minimalne wymagania dotyczące kontrastu lub mają zbyt małą czcionkę.</li>
              <li><strong className="text-neutral-200">Brak opcji zmiany trybu kontrastu lub przełączenia motywu jasnego/ciemnego</strong> – strona obecnie nie zapewnia przełącznika umożliwiającego dostosowanie wyglądu serwisu do potrzeb użytkowników o ograniczonej percepcji wzrokowej.</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h2 className="font-judson font-bold text-2xl text-white">Plany dotyczące usunięcia problemów z dostępnością cyfrową</h2>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p>Zespół techniczny restauracji pracuje nad stopniowym rozwiązywaniem zidentyfikowanych problemów z dostępnością cyfrową. Planowane działania obejmują:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-neutral-400">
              <li>Uzupełnienie tekstów alternatywnych dla grafik,</li>
              <li>Wprowadzenie transkrypcji w materiałach wideo,</li>
              <li>Poprawę kontrastu i typografii w mniej ważnych sekcjach,</li>
              <li>Zwiększenie użyteczności strony wyłącznie przy użyciu klawiatury i czytników ekranu.</li>
            </ul>
            <p>W nadchodzących tygodniach i miesiącach zamierzamy stopniowo eliminować zidentyfikowane problemy, dążąc do pełnej zgodności z ustawą.</p>
          </div>
        </div>
        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h2 className="font-judson font-bold text-2xl text-white">Przygotowanie deklaracji dostępności</h2>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p><strong className="text-white">Data sporządzenia deklaracji:</strong> 28 sierpnia 2026 r.</p>
            <p><strong className="text-white">Data ostatniego przeglądu deklaracji:</strong> 28 sierpnia 2026 r.</p>
          </div>
        </div>
        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h2 className="font-judson font-bold text-2xl text-white">Udogodnienia, ograniczenia i inne informacje</h2>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p>Pomimo pewnych braków w dostępności cyfrowej, zadbaliśmy o to, aby kluczowe funkcje strony były dostępne dla jak najszerszego grona użytkowników, w tym osób z niepełnosprawnościami. W szczególności:</p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              <li><strong className="text-neutral-200">Cały proces zakupowy</strong> – od przeglądania menu, przez wybór produktów, aż po złożenie zamówienia – może być obsługiwany za pomocą klawiatury i czytników ekranu.</li>
              <li><strong className="text-neutral-200">Nawigacja klawiaturą</strong> – użycie klawisza Tab pozwala na szybkie przechodzenie do najważniejszych sekcji strony.</li>
              <li><strong className="text-neutral-200">Kontrast i typografia</strong> – najważniejsze części serwisu (menu, koszyk, formularz zamówienia) charakteryzują się wyraźnym kontrastem i czytelną czcionką.</li>
              <li><strong className="text-neutral-200">Elementy interaktywne</strong> – przyciski, linki i formularze – zostały wyraźnie oznaczone i opisane, aby ich funkcja była zrozumiała dla użytkowników technologii asystujących.</li>
              <li><strong className="text-neutral-200">Dostępne formularze</strong> – formularze używane w procesie zamówienia zostały przygotowane zgodnie z zasadami dostępności (etykiety, walidacja błędów, jasna struktura).</li>
              <li><strong className="text-neutral-200">Struktura nagłówków</strong> – strona zachowuje logiczną hierarchię nagłówków, co umożliwia sprawne nawigowanie za pomocą czytników ekranu.</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h2 className="font-judson font-bold text-2xl text-white">Informacje zwrotne i dane kontaktowe</h2>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p>Problemy z dostępnością cyfrową tej strony internetowej można zgłaszać do Działu Obsługi Klienta Restaumatic Spółka Akcyjna drogą mailową: <a href="mailto:contact@restaumatic.com" className="text-[#f26522] hover:underline">contact@restaumatic.com</a> lub telefonicznie: <strong className="text-white">732 081 111</strong>.</p>
            <p>Każdy ma prawo wystąpić z żądaniem zapewnienia dostępności cyfrowej strony internetowej lub jakiegoś jej elementu.</p>
            <p>W zgłoszeniu należy podać:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-neutral-400">
              <li>Imię i nazwisko,</li>
              <li>Dane kontaktowe (np. telefon, e-mail),</li>
              <li>Dokładny adres strony internetowej, na której znajduje się niedostępny element lub treść, wraz ze wskazaniem usługi, której dotyczy żądanie,</li>
              <li>Opis problemu i rozwiązanie, które byłoby dla Państwa najwygodniejsze.</li>
            </ul>
            <p>Na zgłoszenie odpowiemy jak najszybciej, nie później niż w ciągu <strong className="text-white">7 dni</strong> od jego otrzymania.</p>
            <p>Jeżeli ten termin będzie zbyt krótki, poinformujemy o tym. W powiadomieniu tym wskażemy nowy termin (nie dłuższy niż <strong className="text-white">dwa miesiące</strong>).</p>
            <p>Jeśli nie będziemy w stanie zapewnić dostępności cyfrowej treści wskazanych w zgłoszeniu, zaproponujemy alternatywny sposób dostępu.</p>
          </div>
        </div>
        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h2 className="font-judson font-bold text-2xl text-white">Rozpatrywanie wniosków i skarg dotyczących dostępności</h2>
          <div className="text-sm text-neutral-300 leading-relaxed space-y-3">
            <p>W przypadku odmowy zapewnienia dostępności cyfrowej, mogą Państwo złożyć skargę.</p>
            <p><strong className="text-white">Adres:</strong> Restaumatic SA, ul. Wolności 345, 41-800 Zabrze.</p>
            <p>Mają Państwo również prawo do złożenia skargi, jeśli nie zgadzają się Państwo na skorzystanie z alternatywnego sposobu dostępu.</p>
            <p>Na skargę odpowiemy jak najszybciej, nie później niż w ciągu <strong className="text-white">30 dni</strong> od jej otrzymania.</p>
            <p>Jeżeli ten termin będzie dla nas zbyt krótki, poinformujemy o tym. Nowy termin nie będzie dłuższy niż <strong className="text-white">60 dni</strong>.</p>
            <p><a href="https://bip.brpo.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-[#f26522] hover:underline">Można również poinformować Rzecznika Praw Obywatelskich</a> o tej sytuacji i poprosić go o interwencję.</p>
            <p>Mogą Państwo także powiadomić Prezesa Zarządu PFRON o niespełnianiu przez serwis wymagań dostępności, zgodnie z procedurą przewidzianą w art. 67 ustawy.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

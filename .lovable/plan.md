
# Plan transformacji: CleanPro -> Dom Blasku

## Podsumowanie zmian
Przekształcenie strony firmy sprzątającej "CleanPro" na nową markę "Dom Blasku" (domblasku.pl) z nową kolorystyką niebiesko-białą i wideo w tle sekcji Hero.

---

## 1. Zmiana kolorystyki (Niebieski + Biały)

### Plik: `src/index.css`
Aktualizacja palety kolorów z żółto-złotej na niebiesko-białą:

| Element | Stara wartość (Gold) | Nowa wartość (Blue) |
|---------|---------------------|---------------------|
| Primary | 45 100% 51% (złoty) | 210 100% 50% (niebieski) |
| Accent | 40 95% 55% (złoty) | 200 95% 55% (jasny niebieski) |
| Secondary | 220 15% 20% (ciemny) | 210 25% 20% (granatowy) |
| Gradienty | złote | niebieskie |

---

## 2. Nowa sekcja Hero z wideo w tle

### Plik: `src/components/HeroSection.tsx`
- Usunięcie statycznego zdjęcia
- Dodanie elementu `<video>` z atrybutami autoplay, loop, muted
- Placeholder wideo (możesz później dodać własne)
- Zachowanie overlay i treści tekstowej
- Fallback na kolor tła gdy wideo się ładuje

```text
Struktura:
+----------------------------------+
|  VIDEO (autoplay, loop, muted)   |
|  +----------------------------+  |
|  |  Dark overlay (60-70%)     |  |
|  |  +-----------------------+ |  |
|  |  |  Badge               | |  |
|  |  |  Tytuł + highlight   | |  |
|  |  |  Opis                | |  |
|  |  |  Przyciski CTA       | |  |
|  |  +-----------------------+ |  |
|  +----------------------------+  |
+----------------------------------+
```

---

## 3. Rebranding - CleanPro -> Dom Blasku

### Pliki do aktualizacji:
- **Navigation.tsx** - zmiana nazwy w logo
- **Footer.tsx** - zmiana nazwy i danych kontaktowych
- **Index.tsx** - meta tagi, schema.org, tytuły
- **pl.json, de.json, en.json** - tłumaczenia (zamiana CleanPro na Dom Blasku)

### Nowa ikona logo:
- Zamiast `Sparkles` - ikona `Home` lub `Sparkles` z innym stylem
- Okrągłe/kwadratowe logo w kolorze niebieskim

---

## 4. Aktualizacja plików tłumaczeń

### `src/i18n/locales/pl.json`, `de.json`, `en.json`
- Zamiana wszystkich wystąpień "CleanPro" na "Dom Blasku"
- Aktualizacja emaila: kontakt@domblasku.pl
- Aktualizacja URL: https://domblasku.pl

---

## 5. Aktualizacja pozostałych komponentów

### Komponenty do dostosowania kolorów:
- **CTASection.tsx** - gradient tła
- **PricingSection.tsx** - badge "Najpopularniejszy"
- **Button.tsx** - warianty CTA
- **ProcessSection.tsx** - ikony kroków
- **WhyUsSection.tsx** - ikony cech

---

## Szczegóły techniczne

### Nowe zmienne CSS (src/index.css):
```css
:root {
  /* Primary - Professional Blue */
  --primary: 210 100% 50%;
  --primary-foreground: 0 0% 100%;

  /* Secondary - Dark Navy */
  --secondary: 210 25% 20%;
  --secondary-foreground: 0 0% 100%;

  /* Accent - Light Blue */
  --accent: 200 95% 55%;
  --accent-foreground: 210 25% 15%;

  /* Gradienty */
  --gradient-cta: linear-gradient(135deg, hsl(210 100% 50%) 0%, hsl(200 95% 45%) 100%);
  --shadow-cta: 0 8px 24px -4px hsl(210 100% 50% / 0.35);
}
```

### Struktura wideo w HeroSection:
```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
  poster="/placeholder-hero.jpg"
>
  <source src="/hero-video.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-secondary/70" />
```

---

## Lista plików do modyfikacji

| Plik | Typ zmiany |
|------|-----------|
| src/index.css | Kolory, gradienty, cienie |
| src/components/HeroSection.tsx | Wideo zamiast zdjęcia |
| src/components/Navigation.tsx | Logo i nazwa |
| src/components/Footer.tsx | Nazwa i dane |
| src/pages/Index.tsx | Meta tagi, Schema.org |
| src/i18n/locales/pl.json | Tłumaczenia |
| src/i18n/locales/de.json | Tłumaczenia |
| src/i18n/locales/en.json | Tłumaczenia |

---

## Po zakończeniu
Po akceptacji planu i wdrożeniu zmian będziesz mógł:
1. Dodać własne wideo do sekcji Hero
2. Zaktualizować dane kontaktowe (telefon, adres)
3. Dodać zdjęcia z realizacji do galerii

Czy zatwierdzasz plan?

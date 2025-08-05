# 📊 Angular SMS Chart App

Aplikacja SPA zbudowana w Angularze, umożliwiająca dodawanie i wizualizację liczby wysłanych SMS-ów w poszczególnych miesiącach.

Projekt stworzony na potrzeby zadania rekrutacyjnego.

---

## 🚀 Uruchomienie projektu

1. Zainstaluj zależności:

```bash
npm install
```
2. Uruchom projekt:
```bash
ng serve
```
Aplikacja będzie dostępna pod adresem:

http://localhost:4200

## 🧹 Lintowanie kodu
Aby sprawdzić projekt pod kątem błędów i zgodności ze standardami ESLint, uruchom:

```bash
npm run lint
```

🧰 Technologie:

- Angular (Standalone Components)

- Bootstrap 5

- Angular Material

- ng2-charts + Chart.js

- Moment.js

- TypeScript

📁 Struktura projektu
```text
src/
├── app/
│   ├── chart/          → widok wykresu
│   ├── form/           → widok formularza
│   ├── shared/
│   │   ├── components/   → komponent wykresu
│   │   ├── enums/        → typy wykresów (np. ChartTypeEnum)
│   │   ├── interfaces/   → interfejsy danych (np. ChartTypeOption)
│   │   ├── services/     → singleton z danymi (ChartService)
│   │   ├── types/        → aliasy typów / złożone typy pomocnicze
│   │   └── utils/        → walidatory, formaty, matcher
```

✨ Funkcje:
- Formularz umożliwia dodawanie liczby wysłanych SMS-ów do wybranych miesięcy (dane są sumowane, jeśli miesiąc już istnieje)
- Wykres przedstawia łączną liczbę SMS-ów w każdym miesiącu
- Dynamiczna zmiana typu wykresu (`line`, `bar`)
- Responsywny interfejs (Bootstrap + Angular Material)
- Nawigacja z routingiem (`/chart`, `/form`)

✅ Walidacja:
- 🗓️ Data w formacie MM/YYYY (z Material Datepicker)

- 🔢 Liczba SMS-ów – tylko dodatnie liczby całkowite


🧠 Uwagi techniczne:
- Wykres bazuje na ng2-charts i przyjmuje dane przez @Input

- Dane przechowywane są w singletonie ChartService

- Formularz oparty o ReactiveForms
- Routing i konfiguracja aplikacji bez AppModule (standalone setup)

👤 Autor
Krzysztof Siek
2025 – aplikacja demonstracyjna na potrzeby procesu rekrutacyjnego

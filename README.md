# FixTrade

Платформа для покупки и продажи товаров. React + TypeScript + SWC + Vite + Material-UI + Firebase.

## Установка

```bash
npm install
```

## Переменные окружения

Создайте файл `.env` в корне проекта на основе `.env.example`:

```bash
cp .env.example .env
```

Заполните Firebase учетные данные в `.env`.

## Команды

- `npm run dev` — запустить проект в режиме разработки
- `npm run build` — собрать проект
- `npm run preview` — запустить превью сборки

## Структура проекта

```
src/
├── pages/              # Страницы приложения
│   ├── Home.tsx       # Главная страница
│   └── AddListing.tsx # Форма добавления объявления
├── components/        # React компоненты
│   └── steps/         # Шаги формы добавления объявления
│       ├── CategoryStep.tsx
│       ├── PhotoStep.tsx
│       ├── DescriptionStep.tsx
│       ├── CharacteristicsStep.tsx
│       ├── PriceStep.tsx
│       └── ReviewStep.tsx
├── config/           # Конфигурация
│   ├── firebase.config.ts
│   └── api.ts
├── types/            # TypeScript типы
│   └── listing.ts
├── App.tsx           # Основной компонент с роутингом
└── main.tsx         # Точка входа
```

## Функционал

### Добавление объявления (многошаговая форма)

1. **Категория** — выбор категории товара
2. **Фото** — загрузка фотографий
3. **Описание** — написание описания
4. **Характеристики** — добавление параметров
5. **Цена** — установка цены
6. **Проверка** — подтверждение информации
# fixtrade
# fixtrade

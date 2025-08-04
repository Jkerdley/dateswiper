# DateSwiper - Интерактивная временная шкала исторических событий

[![Демо](https://img.shields.io/badge/Демо-Открыть_онлайн-blue)](https://Jkerdley.github.io/dateswiper)

DateSwiper - это интерактивное веб-приложение для визуализации исторических периодов и событий с использованием современных технологий React, TypeScript, SCSS и библиотек Swiper и GSAP.

## Онлайн-демо

Проект доступен для просмотра онлайн: [https://Jkerdley.github.io/dateswiper](https://Jkerdley.github.io/dateswiper)

## Особенности проекта

-   🔄 Интерактивная круговая временная шкала с анимацией

-   📱 Адаптивный дизайн для разных устройств (мобильные, десктоп)

-   🎚️ Слайдер событий с частично видимыми соседними слайдами (SWIPER)

-   🔢 Динамический счетчик годов с анимацией GSAP

-   🎨 Pixel perfect верстка из Figma макета

## Технологический стек

-   **Frontend**: React, TypeScript

-   **Стилизация**: SCSS, CSS Modules

-   **Анимации**: GSAP

-   **Слайдер**: Swiper

-   **Сборка**: Webpack

-   **Деплой**: GitHub Pages

## Структура проекта

```

dateswiper/

├── public/ # Статические файлы

│ ├── assets/ # Шрифты и другие ресурсы

│ ├── favicon.ico # Иконка сайта

│ └── index.html # Шаблон HTML

```

```
├── src/ # Исходный код

│ ├── components/ # React компоненты

│ │ ├── CircleTimeline/ # Круговая временная шкала

│ │ ├── Controls/ # Кнопки управления

│ │ ├── Crosshair/ # Перекрестие на фоне

│ │ ├── EventCard/ # Карточка события

│ │ ├── EventsSlider/ # Слайдер событий

│ │ ├── TimelinePoint/ # Точка на временной шкале

│ │ ├── Title/ # Заголовок

│ │ └── YearCounter/ # Счетчик годов

│ ├── constants/ # Константы приложения

│ ├── data/ # Данные (исторические периоды)

│ ├── modules/ # Основные модули приложения

│ ├── styles/ # Глобальные стили

│ │ ├── global.scss # Глобальные стили

│ │ ├── mixins.scss # SCSS миксины

│ │ └── variables.scss # SCSS переменные

│ ├── utils/ # Вспомогательные функции

│ ├── App.tsx # Корневой компонент

│ └── index.tsx # Точка входа
```

```

├── .editorconfig # Настройки редактора

├── .gitignore # Игнорируемые Git файлы

├── .prettierrc.json # Настройки Prettier

├── package.json # Зависимости и скрипты

├── tsconfig.json # Настройки TypeScript

└── webpack.config.js # Конфигурация Webpack

```

## Основные компоненты

-   **HistoricalDates**: Основной модуль, объединяющий все компоненты

-   **CircleTimeline**: Круговая временная шкала с точками периодов

-   **EventsSlider**: Слайдер с карточками событий для каждого периода

-   **Controls**: Кнопки навигации между периодами

-   **YearCounter**: Анимированный счетчик годов текущего периода

## Установка и запуск

### Предварительные требования

-   Node.js (версия 16 или выше)

-   npm (версия 8 или выше)

### Установка

1. Клонируйте репозиторий:

```bash

git  clone  https://github.com/Jkerdley/dateswiper.git

cd  dateswiper

```

2. Установите зависимости:

```bash

npm  install

```

### Запуск в режиме разработки

```bash

npm run start

```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

### Сборка для продакшена

```bash

npm  run  build

```

Собранные файлы будут находиться в директории `dist/`.
Запуск собранного проекта локально: npx serve -s dist -l 5000

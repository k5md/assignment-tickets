# Тестовое задание Frontend (React + Redux)

Реализовать одностраничное приложение резервирования билетов в кинотеатр. Время начала сеансов 10:00, время последнего сеанса 20:00. Шаг - каждые 2 часа. Таким образом в течение дня может быть 6 сеансов.
Интерфейс должен отображать доступные даты для бронирования, сеансы для выбранной даты, свободные и забронированные места. При выборе даты и сеанса меньше текущего времени и даты, должны отображаться архивные данные без возможности их изменения.
Для хранения дат использовать LocalStorage и Redux, и при перезагрузке страницы считывать сохраненные данные из LocalStorage.
Глубина архива: одна неделя до текущей даты. Максимальный период бронирования: одна неделя от текущей даты.
Кросбраузерная верстка (IE9, IE10, Chrome, Firefox).
Реализовать на JavaScript/React/Redux/CSS3/ (по желанию Bootstrap)

Результат – ссылка на Github,
Репозиторий должен быть приватный, доступ предоставить для аккаунта MrAvetik

## Вебсайт
https://spiritual-book.surge.sh

## Установка и запуск

- Клонировать репозиторий
- Установить зависимости
```
$ npm install
```
- Запустить webpack-dev-server
```
$ npm run develop
```

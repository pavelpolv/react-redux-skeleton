# React-Redux-Skeleton
### Шаблон для быстрого старта приложений на React.js

Данный шаблон включает в себя основные пакеты для начала разработки приложений на react/redux

### Что включено
[webpack-npm]: https://img.shields.io/npm/v/webpack.svg
[babel-npm]: https://img.shields.io/npm/v/babel-loader.svg
[pug-npm]: https://img.shields.io/npm/v/redux.svg
[sass-npm]: https://img.shields.io/npm/v/sass-loader.svg

|Name|Status|Description|
|:--:|:----:|:----------|
|<a href="https://github.com/webpack/webpack"><img width="48" height="48" title="webpack" src="https://webpack.js.org/d19378a95ebe6b15d5ddea281138dcf4.svg"></a>|![webpack-npm]|Один из самых мощных и гибких инструментов для сборки frontend|
|<a href="https://github.com/babel/babel-loader"><img width="48" height="48" title="babel-loader" src="https://worldvectorlogo.com/logos/babel-10.svg"></a>|![babel-npm]|Babel.JS – это транспайлер, переписывающий код на ES-2015 и выше в код на предыдущем стандарте ES5.|
|<a href="https://github.com/reduxjs/redux"><img width="48" height="48" src="https://redux.js.org/img/redux.svg"></a>|![pug-npm]|Redux является предсказуемым контейнером состояния для JavaScript приложений |
|<a href="https://github.com/jtangelder/sass-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/sass-1.svg"></a>|![sass-npm]|Чтение и сборка a SASS/SCSS файлов|

## Стартуем

##### Склонируйте проект:

```bash
$ git clone https://github.com/pavelpolv/react-redux-skeleton
$ cd <project-name>
```
##### Настройка
Все пакеты настроенны, вам остается только установить зависимости командой
`npm i` или `yarn`


##### Запуск проекта
Выполните сценарии приведенные ниже `yarn <script>` или `npm run <script>`.

| Команды        | Описание                                                           |
|----------------|--------------------------------------------------------------------|
| start          | Старт HMR ; доступен по адресу `localhost:300`                     |
| build          | Сборка ресурсов в режиме development в директории `~/dist`         |
| test           | Запук тестов                                                       |


##### Дополнительно

В проекте настроен `pre-commit`, следовательно при каждом коммите будут запусткаться тесты и ESLint

## Лицензия
[MIT license](https://opensource.org/licenses/MIT).

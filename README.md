# Playwright

## UI Тест на Playwright

    В качестве задания необходимо протестировать авторизацию на сайте netology.ru

1. Подготовьте тестовые данные:

    Cоздайте файл `user.js` и в него положите свой email и password как константы.

    Добавьте файл `user.js` в `.gitignore`(ВАЖНО!! Проследите чтобы email и password не попали в ваш репозиторий - иначе ваш проект не пройдет аудит безопасности проекта, а злоумышленники получат ваши данные)

2. Создайте Тест 1. Успешная авторизация.

    Откройте [форму авторизации](https://netology.ru/?modal=sign_in)

    Найдите поле для ввода email и вставьте туда ваш email

    Найдите поле для ввода пароля и вставьте туда ваш пароль

    Найдите кнопку `Войти` и нажмите на нее

3. Проверьте ожидаемый результат

    Проверьте что открылась страница [профиля](https://netology.ru/profile)

    Удостоверьтесь, что страница профиля открыта, например, проверив элемент `h2` и текст заголовка

4. Создайте Тест 2. Неуспешная авторизация

    Повторите тест 1, используя невалидные данные для авторизации.

5. Проверьте результат

    Появился блок с текстом об ошибке - проверить текст

## Скриншоты

    Автоматические скриншоты для каждого экрана. 
    Сделать это можно с помощью `playwright screenshots`. 

1. Выяснить, как настроить данную функциональность
2. На каждый переход в тесте из задания сделайте скриншоты
3. Скриншоть приложите в раздел issues

live uizzical-swanson-3b6e77.bitballoon.com 

# Junior Frontend - Zadanie rekrutacyjne

## Opis

Twoim zadaniem jest przygotowanie projektu prostej ankiety w technologiach web'owych (czyt. HTML, CSS, JS, etc.), na podstawie podanego wzorca. 

// I made a web app similar to Typeform using JS, CSS, and HTML. App can be quickly customized so that customer questions can be made and inserted into App. As of now the app has styled templates for message (h2), text input, email input, data input, and radio input. Using template functions that I made (located at the top of the src/index.js) pages can quickly be set up in the designated area of the code. The app can have as many question pages as needed and progress bar automatically will update. The app also remembers user input during the session so if you go back a page the answers you selected will be pre-filled. Upon submitting app JSON is created that is then stored in local storage. (I thought about using node to write a file as I don't think its possible with regular JS, but due to time constraints I decided to export to local storage).

If I had more time I would add inputs for textarea and checkbox input. 

## Wymagania

Lista rzeczy, które Twój projekt absolutnie musi spełnić:

- Działanie. Ankieta musi być w pełni działająca, odpowiedzi zaznaczalne, przyciski "Back" i "Next" funkcjonalne, pasek progresu pod ankietą ruchomy.

//works

- Budowa. W projekcie wymagane jest użycie gulp/webpack/rollup/podobne.

//webpack w/ babel for es6

- Konfigurowalność. Treści pytań, odpowiedzi, oraz ich ilość musi być zmienialna w możliwie jak najprostszy sposób.

//questions and pages can easily be customised

- Responsywność. Strona nie psuje się np. na urządzeniu mobilnym.

// responsive, however, I made the app with embedding possible, as of now it needs to stay in the collum format.

- Optymalizacja. Mimo braku wielu obrazków czy innych mediów czas wczytywania strony powinien być jak najkrótszy.

//Pingdom Website Speed


URL
Test from
Stockholm, Sweden 341ms, faster then 98% of websites,

New York City, New York, USA  424ms

## Punkty dodatkowe

Nie wymagane, ale będą dodatkowo oceniane:

- Frontend'owy framework - react, vue, angular, mithril, masz pełną dowolność!

// I wanted to use hyperscript, hyperscript-helpers, virtual-dom but realized that it would be to much unnecessary weight for the task at hand.

- Użycie ES6+ w kodzie, lubimy nowe rzeczy.

//ES6 

- Użycie preprocesora css (Sass, Less, stylus, etc.).

// Sass

- Dodanie prostych animacji (zaskocz nas czymś ciekawym).

// a few minimalist animations have been added to include UI/UX

- Umieszczenie treści pytań ankiety w zewnętrznym pliku `.json`. W jaki sposób będziesz je wczytywał jest zależne od Ciebie, liczymy na kreatywność!

// Saved to local storage 

!!! BUG - all inputs save except for radio inputs, for some reason the radio value is empty (""), App is functional, however, for now, I disabled read/write of radio questions so they are ignored, everything else works. I spend a bit of time trying to figure out what happened. I posted a question on stack overflow and made a code pen to share, and for some people, it works so I'm guessing it might be a browser issue? https://stackoverflow.com/questions/49805856/why-do-my-radio-buttons-not-have-a-value 

## Wskazówki

- Udostępnij projekt w sposób który możemy łatwo obejrzeć (np. na GitHub pages).

//uizzical-swanson-3b6e77.bitballoon.com
- Kod twojego projektu musi być udostępniony na GitHub'ie, tak abyśmy mogli go łatwo sklonować.
- Twój projekt nie musi w pełni 1:1 odzwierciedlić podanego wzorca (być pixel perfect), wystarczy jedynie go odwzorować.

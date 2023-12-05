# Vue Weather App



## Project structure

```plaintext
vue-weather-app/
|-- node_modules/
|-- public/
|-- src/
|   |-- components/
|   |   |-- AutocompleteInput.vue
|   |   |-- CityWeather.vue
|   |   |-- DaysToDisplay.vue
|   |   |-- FooterView.vue
|   |   |-- HeaderView.vue
|   |   |-- LineChart.vue
|   |   |-- NavigationBar.vue
|   |   |-- PreLoader.vue
|   |   |-- ToggleLang.vue
|   |   |-- ToggleTheme.vue
|   |   |-- WarningError.vue
|   |-- helpers/
|   |   |-- extractCity.js
|   |   |-- getAveragesT.js
|   |   |-- getLocal.js
|   |   |-- ipDefaultObject.js
|   |   |-- ipInfoHelper.js
|   |   |-- translateHelper.js
|   |   |-- weatherHelper.js
|   |-- views/
|   |   |-- 404.vue
|   |   |-- Favorites.vue
|   |   |-- Home.vue
|   |-- App.vue
|   |-- clickOutside.js
|   |-- i18n.js
|   |-- router.js
|   |-- main.js
|   |-- style.css
|-- .env.example
|-- index.html
|-- package.json
|-- postinstall.mjs
|-- README.md
|-- vite.config.js
```

## Functionality

### 1. City Autocomplete Input
Input field with city autocomplete functionality powered by Google Maps API. To not to invent a bycicle I've just found nice and simple implementation on [npmjs.com](https://www.npmjs.com/): [vue3-google-autocomplete](https://www.npmjs.com/package/vue3-google-autocomplete) and integrated it to my app.

### 2. API Requests
Utilize axios for making API requests to ['\?Open-Meteo](https://open-meteo.com/), - free open-source weather API.

### 3. Current Weather Card
Display weather information for the current day in the form of a card.

### 4. Hourly Temperature Graph
Show an hourly temperature graph for the current day using any JS plugin[Vue-chartjs](https://vue-chartjs.org/).

### 5. Multiple Weather Blocks
Users are allowed to create multiple weather blocks for different cities. The default is one block, and by clicking the "+" button, another block is added with full functionality. Limit to a maximum of 5 blocks.

### 6. Block Deletion
Implemented the ability to delete blocks, prompting a modal confirmation.

### 7. Favorites Tab
Created a "Favorites" tab where users can add or remove cities. The selected city on the weather card is highlighted with an icon. In the tab, weather blocks for added cities are displayed with only the option to switch between "Day" and "Week." Favorite cities are stored in Local Storage, limiting to a maximum of 5. Modal window is displayed if the limit is exceeded, suggesting the user to remove a city.

### 8. Responsiveness
Application is responsive. In implementing responsiveness SCSS and CSS @media are used. Also relative units like `rem`, `%` are used.

### 9. Day/5 Days Toggle \*
toggle for displaying "Day" or "5 Days" weather added. The weather card and graph are adapted accordingly, considering the average temperature from hourly statistics for the day.

### 10. Default User Location \*
The weather is displayed for the user's location determined by IP address.
Actually I've implemented this * at first step with [geoapify.com](https://apidocs.geoapify.com/) platform, - I'd say - It is cool (and accurate)!

### 11. Preloaders **
I'm proud of my 'pure CSS' preloader, wich I've developed and integrated where necessary, such as during API requests.

### 12. Multilingual Support \*\*\*
It's second thing I was very interested - so I've implemented it firstly withing location autodetect.
App providing multilingual support for the interface and API responses in English (en) and Ukrainian (uk).
It can be toggled via custom select-option component allowing use flags of countries (i.e. the U.K and Ukraine flags in our case).

### 13. Day/Night Mode \*\*\*\*
Rather then implementing a switching between displaying "Day" and "Night" weather (based on `sunrise` and `sunset` API response fields), I've decided to add a toggling between Day and Night theme-view modes.

## Getting Started

Follow these steps to run the project locally:

1. Install dependencies: `npm install`
2. Fill in `.env` with your OpenWeatherMap API-key (and optionally GithHub-pages base URL)
3. Start the development server: `npm run dev`

...

(č) vadym4che

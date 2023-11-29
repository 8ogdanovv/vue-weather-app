# Vue Weather App

## Functionality

### 1. City Autocomplete Input
Implement an input field with city autocomplete functionality.

### 2. API Requests
Utilize fetch or axios for making API requests to [OpenWeatherMap](https://openweathermap.org/).

### 3. Current Weather Card
Display weather information for the current day in the form of a card.

### 4. Hourly Temperature Graph
Show an hourly temperature graph for the current day using any JS plugin like [Chart.js](https://www.chartjs.org/) (without the Vue plugin).

### 5. Multiple Weather Blocks
Allow users to create multiple weather blocks for different cities. The default is one block, and by clicking the "+" button, another block is added with full functionality. Limit to a maximum of 5 blocks.

### 6. Block Deletion
Implement the ability to delete blocks, prompting a modal confirmation.

### 7. Favorites Tab
Create a "Favorites" tab where users can add or remove cities. Highlight the selected city on the weather card with an icon or border. In the tab, display weather blocks for added cities with only the option to switch between "Day" and "Week." Store favorite cities in Local Storage, limiting to a maximum of 5. Display a modal window if the limit is exceeded, prompting the user to remove a city.

### 8. Responsiveness
Ensure the application is responsive, with a minimum main container width of 360px and a maximum of 1200px.

### 9. Day/5 Days Toggle
* Add a toggle for displaying "Day" or "5 Days" weather. Adapt the weather card and graph accordingly, considering the average temperature from hourly statistics for the day.

### 10. Default User Location
* Optionally display the weather for the user's location determined by IP address using any open resource.

### 11. Preloaders
* Integrate preloaders where necessary, such as during API requests.

### 12. Multilingual Support
* Provide multilingual support for the interface and API responses in English (en) and Ukrainian (uk).

### 13. Day/Night Mode
*** Implement a toggle for switching between displaying "Day" and "Night" weather.

## Getting Started

Follow these steps to run the project locally:

1. Install dependencies: `npm install`
2. Fill in `.env` with your OpenWeatherMap API-key (and optionally GithHub-pages base URL)
3. Start the development server: `npm run dev`

...

(č) vadym4che

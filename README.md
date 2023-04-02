# [Okinawa App](https://github.com/Likokoko/okinawa.git)
 *  This is a travel-related React application that consists of several components, including Expense, Meals, Map, and Cards, which display information about expenses, meals, maps, and popular restaurants,
  
Skills Used
1. React for building the user interface and creating reusable UI components
2. useState and React Hooks for managing state within the component, including showSchedule, showFullItinerary, and currentDay
3. useEffect for performing side effects such as loading external scripts and fetching data
4. Loader from "@googlemaps/js-api-loader" for loading the Google Maps API
5. Axios for making HTTP requests to fetch data
6. Google Maps API for rendering the map, street view, and directions
7. Asynchronous programming for fetching photos asynchronously using the fetchPhotos function
8. Event handling for handling the click event on the map and each itinerary day
9. Conditional rendering for showing different components based on the state of showRoute and conditionally rendering the showFullItinerary and showSchedule components based on the state
10. JSX for writing HTML-like code within your JavaScript code
11. Props for passing data from a parent component to a child component in React, including itinerary, currentDay, and handleOff props to the Schedule component
12. Array.prototype.map() for looping over the businesses array and creating a new array of cards, and conditional rendering for checking if each business has an image URL and only rendering the card if it does
13. CSS for styling the cards and the container and making the app responsive.



# Future Improvements
  	•	HTML structure:
    * Ensure semantic tags are used appropriately for better accessibility and SEO.
    • CSS design:
    * Improve consistency in design elements such as font, color, and spacing.
    • Functionality completeness:
    * Add error handling and validation for user inputs to improve the robustness of the application.

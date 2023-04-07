# Meal Manager
## By: Josh Fowler, Halim Choi, Masad Ilyas, Andrew O’Brien

### Purpose:
Allow users to generate recipe ideas (random or by user criteria) to plan their meals for the week using provided criteria.
Based on user input, the recipe is inserted into the time slot of their choice on the calendar.

### Core Features:
- Provides recipes based on user input

- Creates a calendar to display weekly meal plan

- Displays schedule by day and time slot (morning, noon and night)

- Users can add their queried recipe onto their schedule

[Spoonacular API](https://spoonacular.com/food-api)
    - created GET requests to fetch recipe data and display them on the page

Endpoints:

```
GET
https://api.spoonacular.com/recipes/complexSearch

GET
https://api.spoonacular.com/recipes/random

GET
https://api.spoonacular.com/recipes/{id}/analyzedInstructions
```
        



### Fulfilling Requirements of the Project:
- We are utilizing an API in our code which will have a large database of information to pull from and display
- Event listeners will be employed for user input submission, option selections and clicks
- Array iterations for traversing the data received from the api
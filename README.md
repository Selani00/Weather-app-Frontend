# WeatherWise (Weather Application)

A fully functional, live application with user authentication and weather information. 

**Overview of Technological choices**
- Backend : **Node.Js with Express.js**
- Database : **MongoDB**
- Frontend : **Vite + React**
- API Intergration : **OpenWeatherMap**
- Deployment :
  - Backend : Firebase Cloud Functions
  - Frontend : Vercel
 
**Features**
- User Authentication via email and password
- User Authentication via google
- Live weather details
- Daily weather forcast 
- Hourly weather forcast
- Weather Infromation based current location or user input

## Weather App - Frontend

### Setup Intructions

**Prerequisites**

- Should have Node.js in your local machine.
- Should have firebase account
- Should have account on OpenWeatherMap (https://openweathermap.org/)

**Installation process**

- Before start the frontend you need to clone the Backend. Git link for backend 
https://github.com/Selani00/Weather-App.git 

- Download or Clone the repository. 
  - To download you need to unzip the folder
  - To clone the repository , go the folder where your want to clone the repo. Open the git bash and type folowings
    - git clone https://github.com/Selani00/Weather-app-Frontend.git
    - cd Weather-app-Frontend
- Install dependencies
   - npm i
- create .env file in the root directory and add your API keys.
   - Firebase (Should have project with enable the google authentication)
   - OpenWeatherMap 
- Start the development server
   - npm run dev


### Technological choices

Why react + vite ?
 - React +vite is faster than normal react app. *npm create vite@latest* creates the app faster then *npx create-react-app my-app*. Also, vite speeds up the development feedback loop. 

Dependencies Use
- **@reduxjs/toolkit** - To write Redux logic
- **firebase** - Integration with Firebase services for authentication
- **flowbite-react** - To get React components and UI elements
- **framer-motion** - To add page transitions
- **luxon** - To handle dates and times in weather information
- **react** - To build user interfaces with React
- **react-dom** - To interact with the DOM
- **react-icons** - To get react icons
- **react-redux** - For state management
- **react-router-dom** - For navigation and routing
- **react-toastify** - To display error messages
- **react-type-animation** - To add typewriter-style animations 
- **redux-persist** - To store data across page reloads.

### Deployment process

- Create account in vercel
- Create new project
- Connect github account and select this repository and click install to install the repo
- Select vite as a framework
- Add environment variable
- Deployed

**Website Link** - https://weather-app-frontend-three.vercel.app/



    

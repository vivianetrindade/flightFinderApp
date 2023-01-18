<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <a href="https://github.com/vivianetrindade/flightFinderApp">
    <img src="client/public/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Flight Finder APP</h3>

  <p align="center">
    The project is a simple flight booking app.
    <br />
    <a href="https://github.com/vivianetrindade/flightFinderApp"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/vivianetrindade/flightFinderApp/issues">Report Bug</a>
    ·
    <a href="https://github.com/vivianetrindade/flightFinderApp/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

The main goal is the user be able for search for flights. The possible flights will displayed and the user can book the flight. The app consume an Api that shows real flights for booking. When the user choose to book the flight, the flight booked is saved in MongoDB database. The user can also see the booked flight using the flightbookingID.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![React-router-dom][React_router_dom.js]][React_router-url]
* [![Styled-components][Styled.components]][Styled-components-url]
* [![Axios][Axios.js]][Axios-url]
* [![Express][Express.js]][Express-url]
* [![MongoDB][Mongo.Db]][MongoDb-url]
* [![Mongoose][Mongoose.js]][Mongoose-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Getting Started

This is instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

You need to have intall npm in your machine. You can install open the terminal and running:
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

#### For the backend:

1. Get a free API Key at [https://developers.amadeus.com/self-service/category/air/api-doc/flight-offers-search/api-reference](https://developers.amadeus.com/self-service/category/air/api-doc/flight-offers-search/api-reference)
2. Create a mongoDb cluster at [https://www.mongodb.com/](https://www.mongodb.com/)
3. Clone the repo
   ```sh
   git clone https://github.com/vivianetrindade/flightFinderApp.git
   ```
4. Go to the server folder
   ```sh
   cd server
   ```
5. In the server folder Install NPM packages
   ```sh
   npm install
   ```
6. Create a .env file and Enter your API CLIENT and API CLIENT SECRET
   ```env
   AMADEUS_CLIENT_ID='ENTER YOUR CLIENT ID'
   AMADEUS_CLIENT_SECRET='ENTER YOUR CLIENT SECRET'
   ```
7. Enter also in the .env file your MONGO USERNAME, MONGO PASSWORD and MONGO CLUSTER
   ```env
   MONGO_USERNAME='ENTER YOUR MONGO USERNAME'
   MONGO_PASSWORD='ENTER YOUR MONGO PASSWORD'
   MONGO_CLUSTER='ENTER YOUR MONGO CLUSTER'
   ```
8. Run the server
   ```sh
   npm run dev
   ```

#### For the frontend:

1. go to the client folder
   ```sh
   cd client
   ```
2. Install NPM packages
   ```sh
    npm install
    ```
3. Run the app
    ```sh
      npm start
    ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

The user can search for flights using the search bar. The user can choose the departure and arrival airport, the departure date and the return date. The user can also choose the number of passengers. The user can also choose the class of the flight. 

The user can also see the booked flights using the flightbookingID. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [x] Save the flight in the database
- [ ] Cancel the booked flight
- [ ] Filter the flights by price
- [ ] Send a email to the user when the flight is booked

See the [open issues](https://github.com/vivianetrindade/flightFinderApp/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Contact

Viviane Trindade - [@linkedin_handle](https://www.linkedin.com/in/viviane-trindade/) - trindade.vivine@gmail.com

Project Link: [https://github.com/vivianetrindade/flightFinderApp](https://github.com/vivianetrindade/flightFinderApp)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Acknowledgments

* [Amadeus](https://developers.amadeus.com/self-service/category/air/api-doc/flight-offers-search/api-reference)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


[contributors-shield]: https://img.shields.io/github/contributors/vivianetrindade/flightFinderApp.svg?style=for-the-badge
[contributors-url]: https://github.com/vivianetrindade/flightFinderApp/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/vivianetrindade/flightFinderApp.svg?style=for-the-badge
[forks-url]: https://github.com/vivianetrindade/flightFinderApp/network/members
[stars-shield]: https://img.shields.io/github/stars/vivianetrindade/flightFinderApp.svg?style=for-the-badge
[stars-url]: https://github.com/vivianetrindade/flightFinderApp/stargazers
[issues-shield]: https://img.shields.io/github/issues/vivianetrindade/flightFinderApp.svg?style=for-the-badge
[issues-url]: https://github.com/vivianetrindade/flightFinderApp/issues
[license-shield]: https://img.shields.io/github/license/vivianetrindade/flightFinderApp.svg?style=for-the-badge
[license-url]: https://github.com/vivianetrindade/flightFinderApp/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/viviane-trindade/
[product-screenshot]: client/public/images/ScreenshotFlightFinder.jpg
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square
[TypeScript-url]: https://www.typescriptlang.org/
[React_router_dom.js]: https://shields.io/badge/ReactRouter-CA4245?logo=ReactRouter&logoColor=FFF&style=flat-square
[React_router-url]: https://reactrouter.com/
[Node.js]: https://shields.io/badge/Node.js-339933?logo=Node.js&logoColor=FFF&style=flat-square
[Node-url]: https://nodejs.org/en/
[Express.js]: https://shields.io/badge/Express.js-000000?logo=Express&logoColor=FFF&style=flat-square
[Express-url]: https://expressjs.com/
[Mongo.DB]: https://shields.io/badge/MongoDB-47A248?logo=MongoDB&logoColor=FFF&style=flat-square
[MongoDB-url]: https://www.mongodb.com/
[Mongoose.js]: https://shields.io/badge/Mongoose.js-47A248?logo=MongoDB&logoColor=FFF&style=flat-square
[Mongoose-url]: https://mongoosejs.com/
[Amadeus]: https://shields.io/badge/Amadeus-000000?logo=Amadeus&logoColor=FFF&style=flat-square
[Amadeus-url]: https://developers.amadeus.com/self-service/category/air/api-doc/flight-offers-search/api-reference
[Styled.components]: https://shields.io/badge/StyledComponents-DB7093?logo=StyledComponents&logoColor=FFF&style=flat-square
[Styled-components-url]: https://styled-components.com/
[Axios.js]: https://shields.io/badge/Axios-000000?logo=Axios&logoColor=FFF&style=flat-square
[Axios-url]: https://www.npmjs.com/package/axios
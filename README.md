<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/gaben.jpg" alt="Logo" width="200" height="200">
  </a>

  <h3 align="center">NHiL</h3>

  <p align="center">
    Nöden Har ingen Lag!
  </p>
</div>

<!-- TABLE OF CONTENTS -->
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
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

lorem lorem lorem

Use the `README.md` to get started.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][react.js]][react-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kodmeron/NHiL.git
   ```
1. Install NPM packages
   ```sh
   npm install
   ```
1. Start
   ```js
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Git commit structure**

The commit type can include the following:

- feat
- fix
- docs
- style
- test
- revert
- chore

**Good**

> feat: improve performance with lazy load implementation for images
>
> chore: update npm dependency to latest version
>
> fix: bug preventing users from submitting the subscribe form
>
> update: incorrect client phone number within footer body per client request

**Bad**

> fixed bug on landing page
>
> Changed style
>
> oops
>
> I think I fixed it this time?
>
> _empty commit messages_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

NHiL - [@nhil.boys](https://twitter.com/NHiL)

Project Link: [https://github.com/kodmeron/NHiL](https://github.com/kodmeron/NHiL)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## TEST

### Jasmine

If Jasmine for some reason isn't installed:

> npm install --save jasmine

look if it is installed correctly

> npm test init

Run the tests!!

> npm test

### TEST API

Install jest and supertest:

> npm install jest

> npm install supertest

Check if it is intalled correctly by looking inside the package.json file

This is what you should see:

```json
{
  "name": "edu-api-testing",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "jest --verbose",
    "test": "jest"
  }
}
```

Make a folder called \_\_tests\_\_ and make a file called supertest.js in the folder

```
mkdir __tests__

cd __tests__

touch supertest.js

```

## supertest.js

```js
const request = require("supertest");

const HOST = process.env.HOST || "https://petstore.swagger.io";

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

describe("When testing jest", () => {
  describe("given i have a non failing test", () => {
    it("should be one", () => {
      expect(1).toBe(1);
    });
  });
```

This code tests the petstore API:

```js
describe("Testing petshop", () => {
  describe("given a broken url", () => {
    it("should return status 404", () => {
      const container = request(HOST);
      container.get("/whatever").expect(404);
    });
  });
});
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/kodmeron/NHiL.svg?style=for-the-badge
[contributors-url]: https://github.com/kodmeron/NHiL/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kodmeron/NHiL.svg?style=for-the-badge
[forks-url]: https://github.com/kodmeron/NHiL/network/members
[stars-shield]: https://img.shields.io/github/stars/kodmeron/NHiL.svg?style=for-the-badge
[stars-url]: https://github.com/kodmeron/NHiL/stargazers
[issues-shield]: https://img.shields.io/github/issues/kodmeron/NHiL.svg?style=for-the-badge
[issues-url]: https://github.com/kodmeron/NHiL/issues
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com

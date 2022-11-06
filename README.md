<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="assets/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">Lazy Docs</h3>

  <p align="center">
    A
command-line tool available as an NPM package which creates a starter backend project consisting of CRUD API endpoints
and a configured PostgreSQL database (using Prisma ORM) from just an ER Diagram which the user needs to provide in
JSON format.
    <br />
    <br />
    ·
    <a href="https://github.com/abhi-824/lazydocs/issues">Report Bug</a>
    ·
    <a href="https://github.com/abhi-824/lazydocs/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS
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
 -->

<!-- ABOUT THE PROJECT -->

## About The Project

CRUDify is a command-line tool to kickstart a backend project by just providing an ER Diagram.
<br>
<br>
The user needs to create a database
schema in JSON format and then install
the package. Next step is to invoke the package
from the command line and pass the
name of the schema file along with it.
<br>
<br>
This creates a backend project with the corresponding database schema file for Prisma ORM. Further, it also contains all the
endpoints for CRUD operations for all
database tables.

<br>

## Installation - Local Development

Install the dependencies

```
yarn install
```

Build the project in watch mode

```
yarn build -w
```

In a separate terminal, run the project

```
yarn dev
```

## How To Use

Consider the following ER Diagram

<p align="center">
<img src="https://user-images.githubusercontent.com/57593654/176952224-d029b872-e281-4b0c-9fbc-2567703f1a92.png" alt="BFS" width="700px">

Shown below will be the corresponding schema for CRUDify

<p>Step 1: Create a new folder for your project</p>
<img src="https://user-images.githubusercontent.com/57593654/176953567-444396b0-8bb4-43d8-8881-7bf963659be9.png" alt="Step 1: Create a new folder for your project" width="700px">

<p>Step 2: Create your schema as a JSON file</p>
<img src="https://user-images.githubusercontent.com/57593654/176953572-d0dbfec7-1f10-4821-b128-1feea9aceae3.png" alt="Step 2: Create your schema as a JSON file" width="700px">

<p>Step 3: Install the crudify-dtu NPM package</p>
<img src="https://user-images.githubusercontent.com/57593654/176953573-39a69d7d-48f6-4288-a7a5-cdbe45a122e5.png" alt="Step 3: Install the crudify-dtu NPM package" width="700px">

<p>Step 4: CRUDify your ER Diagram using npx crudify-dtu “schema.json” command</p>
<img src="https://user-images.githubusercontent.com/57593654/176953577-a5c299b9-4ce7-4599-b10a-4dc6e2169ea5.png" alt="Step 4: CRUDify your ER Diagram using npx crudify-dtu “schema.json” command" width="700px">

<p>You can see the equivalent schema created in Prisma ORM in app/prisma/schema.prisma file
This schema is converted into raw SQL queries after setup (after Step 5) 
</p>
<img src="https://user-images.githubusercontent.com/57593654/176953580-7e04a74b-940f-450d-afd4-4a7bd1b7270d.png" alt="Equivalent schema created in Prisma ORM" width="700px">

<p>You can see app/src/routes/ contains the APIs for blog, review and user models</p>
<img src="https://user-images.githubusercontent.com/57593654/176953583-cd0f3799-897b-4de1-8f3c-769d23744dab.png" alt="APIs for blog, review and user models" width="700px">

<p>Step 5:  cd into app directory and follow the instructions shown below for setup</p>
<img src="https://user-images.githubusercontent.com/57593654/176953586-700d8001-1ea3-4ae0-b136-6aebb95cf7d4.png" alt="Instructions shown below for setup" width="700px">

### Built With

> TypeScript

## Contact

Abhinandan Sharma - [Linkedin](https://www.linkedin.com/in/abhinandan-sharma-dtu/) - abhi.moudgil15@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

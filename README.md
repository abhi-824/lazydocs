<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="assets/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">Lazy Docs</h3>

  <p align="center">
    A third party tool that runs on a separate server and redirects the api calls to the port you specify and stores the api calls and convert the calls to swagger.json which then automates the process of api docs building. 
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

LazyDocs is a third party tool to automate the building and maintanance of API docs in a backend project by just calling the API.
<br>
<br>
The user needs to clone the repository and add the specified PORT in which the original server is running. 
<br>
<br>This creaetes a swagger.json in the folder itself with the API calls which are called through the process.

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

Consider the following Server

<p align="center">

<img src="https://user-images.githubusercontent.com/55046095/200155344-0f92a132-cb2d-48e1-a7f1-866d8ccf320b.png" alt="BFS" width="700px">


Shown below are the sample api calls in this project: 

<img src="https://user-images.githubusercontent.com/55046095/200155369-ed59e311-f06f-4f44-82b3-d8ad25e53ab4.png" alt="BFS" width="700px">


<p>Step 1: Add PORT into the env</p>
<img src="https://user-images.githubusercontent.com/55046095/200155392-56594c0d-9149-4474-8ebb-6c6da5fc9a66.png" alt="BFS" width="700px">

<p>Step 2: Start the server on lazy docs</p>
<img  alt="image" src="https://user-images.githubusercontent.com/55046095/200155425-92dd317b-acac-4f46-8dc3-b8946037059c.png" width="700px">

<p>Step 3: Start calling api calls from PORT 3001 now.</p>
<img width="700" alt="image" src="https://user-images.githubusercontent.com/55046095/200155444-5c4b58c4-d6b7-4b0c-9b67-14b7290667b5.png">

<p>Step 4: Swagger Json will keep on updating</p>
<img width="700" alt="image" src="https://user-images.githubusercontent.com/55046095/200155470-d636e441-bbe8-43f1-8993-ec982eeb5799.png">

### Architecture: 

![hackCBS5 0](https://user-images.githubusercontent.com/55046095/200155831-c30f437a-b05f-4aec-b016-68d0ec574461.gif)

### Built With

TypeScript, mostly

## Contact

Abhinandan Sharma - [Linkedin](https://www.linkedin.com/in/abhinandan-sharma-dtu/) - abhi.moudgil15@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

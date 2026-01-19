# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
<!-- - [Acknowledgments](#acknowledgments) -->

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

<!-- ![](./screenshot.jpg) -->

### Links

<!-- - Solution URL: [Add solution URL here](https://your-solution-url.com) -->
<!-- - Live Site URL: [Add live site URL here](https://your-live-site-url.com) -->

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- React Router
- TypeScript

### What I learned

### React Router

This is the first project that I am using React Router. After completing the Reusability and Routing sections of the [Scrimba](https://scrimba.com/) course - [Advanced React](https://scrimba.com/advanced-react-c02h), I used this project to practise and solidify my learning.

#### Routing

React Router uses client-side routing - serving the entire web app, minus some API or database requests that might be needed, and allowing the React app to load any new pages as part of the app without sending a request to the server again.

As part of the Scrimba course, I learnt about `<BrowserRouter>`, `<Routes>` and `<Route>` elements, as well as creating layout components for pages that share UI, as well as `<Link>` and `<NavLink>` elements, all of which I have used in this project. In completing this project I also discovered the `<Navigate>` element, which I used to redirect a route.
I found an incredibly useful feature of `NavLink` is it's render props, specifically 'isActive'. This allows for the easy conditional addition of styles or a class to the element, depending on whether it is the active link or not. I have used this on all the navigation elements in this project as they all have 'active' states, and using the built in 'isActive' property requires less, self-implemented JavaScript.

### TypeScript

This is also the first project that I have used TypeScript in. Whilst majority of the time TypeScript is able to identify the correct type of a variable/function etc. I have tried to be explicit with my types for this project to solidify what I have learnt.

### CSS Features

#### Using rgb(from)

The syntax `rgb(from {color} r g b / alpha)` can be used to alter a preset color, including it's alpha value. I used this for the background colour of the navbar, as it has some transparency so I needed to alter the alpha value:

```css
background-color: rgb(from v.$color-white r g b / 0.05);
```

This came in useful in several areas of this project, and will be something I use in my own projects.

### Continued development

### Useful resources

- [Learn Advanced React - Scrimba](https://scrimba.com/advanced-react-c02h) - Great course for learning about Reusability, Routing and Performance in React, with plenty of hands on (the keyboard) learning and critical thinking need. Not just a _"here's how you do it, now copy me"_ course.
- [Learn TypeScript - Scrimba](https://scrimba.com/learn-typescript-c03c) - Another great course from Scrimba, plenty of keyboard use and thinking for yourself to take concepts and putting it into real code.
- [Swiped Events NPM Package](https://www.npmjs.com/package/swiped-events) - allows for the addition of "swiped" events to event listeners. The npm package I used to allow users to swipe navigate through the content of this projects pages

## Author

- Frontend Mentor - [@s2i61m97o](https://www.frontendmentor.io/profile/s2i61m97o)
- X - [@mattyjsimmo](https://www.x.com/mattyjsimmo)

<!-- ## Acknowledgments -->

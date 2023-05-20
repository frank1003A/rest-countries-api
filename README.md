# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Links

- Solution URL: [url](https://your-solution-url.com)
- Live Site URL: [url](https://rest-countries-api-snowy.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- CSS Keyframes
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Framer-motion](https://www.framer.com/motion/) - React Library

### What I learned

I mirrored Chakra UI's SimpleGrid component to create the `SimpleGrid` Component.
I could easily have used a flexbox but I wanted a customizable component.


SimpleGrid Component:

```tsx
<SimpleGrid row={5} column={2} columnGap={10} rowGap={5}>
  // Component character data here
</SimpleGrid>
```
### Useful resources

- [upmostyly](https://upmostly.com/tutorials/how-to-use-media-queries-in-react) - The `useMediaQuery` hook is based on this article. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@frank1003A](https://www.frontendmentor.io/profile/frank1003A)
- Twitter - [@FrankEzene](https://twitter.com/FrankEzene)

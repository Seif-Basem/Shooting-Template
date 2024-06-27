```diff
Hello! and welcome to Shooting template,

- I used (HTMl, CSS, JS, VueJs and bootstrap) in buliding this template.

+ I used the (bootstrap) in a specific things like [Carousel, accordion, container, container-fluid and style for the headings in evey section of home page and every heading in the top of every page] any thing else is pure CSS.

- I used AOS animation library to animate the site when scrolling so you will find that style nearly every where ==> (style="overflow: hidden"). that it is bcs we don't need to have a horizontal scroll that AOS animation causing.

+ The teamplate have light and dark mode.

- The teamplate is SEO supported.

+ Every thing is commented so you don't get lost in the code.
```
----------------------------------------------------------------------------------------------------------
# first of all you need to know how to set up the project

# vue-build
## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```
----------------------------------------------------------------------------------------------------------
[[[[[[[[[[[[[FONTS]]]]]]]]]]]]]

I used 2 fonts in the template
- syne
- DM serif display
## you can change them by going to public > index.html ==> in the head tag
## then go to src > App.vue ==> in the style
----------------------------------------------------------------------------------------------------------
[[[[[[[[[[[[[COLORS]]]]]]]]]]]]]

## go to src > App.vue ==> in the style you will find the root of all colors and light mode colors too
----------------------------------------------------------------------------------------------------------
[[[[[[[[[[[[[Pages]]]]]]]]]]]]]

you have 7 pages (home, about, portfolio, services, works, faq, contact)
## you will find them in src > views
every page have a css file 
## you will find them in src > css
----------------------------------------------------------------------------------------------------------
[[[[[[[[[[[[[components]]]]]]]]]]]]]

you have 2 components folders

1- HomeComponent have two sliders for landing and testimonials sections and they have its style in the same file
2- global have (header, footer, light&Dark theme btns, loading animation, cursor style) and every one  have its style in the same file
----------------------------------------------------------------------------------------------------------
[[[[[[[[[[[[[JSON]]]]]]]]]]]]]

you hvar 3 json files

1-ourTeam
2-portfolio
3-services

# I used every one of them in every where I needed it to be like (home page, portfolio page, services page)
----------------------------------------------------------------------------------------------------------
[[[[[[[[[[[[[PHOTOS]]]]]]]]]]]]]

you can access them by going to src > assets

you will find two folders

1- Icons : I downloaded them as svg from fontAwesome library
2- img : I downloaded them from pexels and wallpaper flare then I converted them into [.webp] and entered them into [Tinypng.com] to reduce the size

SkinAndBones-Skeleton is an unofficial version of Dave Gamache's Skeleton Framework, based on a stable version of Skeleton 2.0.4. It was originally based on Version 1.2.

# [Skeleton](http://getskeleton.com)
Skeleton is a simple, responsive boilerplate to kickstart any responsive project.

Check out <http://getskeleton.com> for documentation and details.

## Getting started

There are a couple ways to download Skeleton:
- [Download the zip](https://github.com/dhg/Skeleton/releases/download/2.0.4/Skeleton-2.0.4.zip)
- Clone the repo: `git clone https://github.com/dhg/Skeleton.git` (Note: this is under active development, so if you're looking for stable and safe, use the zipped download)

## SkinAndBones-Skeleton
SkinAndBones-Skeleton is a template based on the Skeleton boilerplate. It was developed to flesh out the basic boilerplate with common features of a basic website, such as a slideshow and navigation, turning it into more of a UI framework, for use in quickly comping up a functional website.

CSS and JavaScript for various components are added as seperate files so they can be added or deleted as quickly, as necessary. For instance, 'styles-basic.css' containes the code for links, buttons, forms, lists, code, tables, spacing and utilities. The file is in the project, but not linked to the html, so that those things can be copied and pasted into the 'base.css' as needed. 

### What's in the download?

The download includes Skeleton's CSS, Normalize CSS as a reset, a sample favicon, and an index.html as a starting point.

```
Skeleton/
├── index.html
├── js/
│   ├── better-simple-slideshow.js (Slideshow only requires one of these.)
│   ├── better-simple-slideshow.min.js
│   └── hammer.min.js
├── css/
│   ├── normalize.min.css
│   ├── base.css
│   ├── simple-slideshow-styles.css
│   ├── styles-basic.css
│   └── skeleton.css
├── fonts/
└── images/
    └── favicon.ico
      ├── icons/
      |  └── enlarge.svg, info.png
      └── slides/
       └── skel-slides 1 thru 4

```

### Why it's awesome

The basic Skeleton boilerplate is lightweight and simple. It styles only raw HTML elements (with a few exceptions) and provides a responsive grid. Nothing more.

SkinAndBones-Skeleton adds:
- A Better Simple Slideshow
- Side navigation with and without multilevel accordion menus
- Additional folders to aid in organization
- The grid and basic style codes are seperated

# A Better Simple Slideshow
This is a fairly basic slideshow, written in javascript. This is a dual-purpose project, it's meant to be something you can drop right into your page and use if you so choose, but it's also meant as an example/tutorial script showing how to build a simple DIY slideshow from scratch on your own. [Here is a tutorial/walkthrough](http://themarklee.com/2014/10/05/better-simple-slideshow/).

## Features
* fully responsive
* option for auto-advancing slides, or manually advancing by user
* multiple slideshows per-page
* supports arrow-key navigation
* full-screen toggle using HTML5 fullscreen api
* swipe events supported on touch devices (requires [hammer.js](https://github.com/hammerjs/hammer.js))
* written in vanilla JS--this means no jQuery dependency (much :sparkling_heart: for [jQuery](https://github.com/jquery/jquery) though!)

## Browser support

- Chrome latest
- Firefox latest
- Opera latest
- Safari latest
- IE latest

The above list is non-exhaustive. Skeleton works perfectly with almost all older versions of the browsers above, though IE certainly has large degradation prior to IE9.

## License

All parts of Skeleton are free to use and abuse under the [open-source MIT license](https://github.com/dhg/Skeleton/blob/master/LICENSE.md).


## Colophon

Skeleton was built using [Sublime Text 3](http://www.sublimetext.com/3) and designed with [Sketch](http://bohemiancoding.com/sketch). The typeface [Raleway](http://www.google.com/fonts/specimen/Raleway) was created by [Matt McInerney](http://matt.cc/) and [Pablo Impallari](http://www.impallari.com/). Code highlighting by Google's [Prettify library](https://code.google.com/p/google-code-prettify/). Icons in the header of the documentation are all derivative work of icons from [The Noun Project](http://thenounproject.com). [Feather](http://thenounproject.com/term/feather/22073) by Zach VanDeHey, [Pen](http://thenounproject.com/term/pen/21163) (with cap) by Ed Harrison, [Pen](http://thenounproject.com/term/pen/32847) (with clicker) by Matthew Hall, and [Watch](http://thenounproject.com/term/watch/48015) by Julien Deveaux.

SkinAndBones-Skeleton
Slideshow images - Dover (public domain)
Multi-level Accordion was created by Ryan Bobrowski. http://codepen.io/rbobrowski/pen/likvA
Skeleton was created by Dave Gamache for a better web. http://getskeleton.com/
A Better Simple Slideshow http://leemark.github.io/better-simple-slideshow/
Hammer.JS Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;

## Acknowledgement
Skeleton was created by [Dave Gamache](https://twitter.com/dhg) for a better web.
SkinAndBones-Skeleton was created by Susan Jensen - to put a little meat on those bones.
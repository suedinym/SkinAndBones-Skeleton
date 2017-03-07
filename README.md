SkinAndBones-Skeleton is an unofficial version of Dave Gamache's Skeleton Framework, based on a stable version of Skeleton 2.0.4. It was originally based on Version 1.2.

# [Skeleton](http://getskeleton.com)
Skeleton is a simple, responsive boilerplate to kickstart any responsive project. (SkinAndBones- Skeleton, not so much anymore.)

Check out <http://getskeleton.com> for documentation and details.

## Getting started

There are a couple ways to download Skeleton:
- [Download the zip](https://github.com/dhg/Skeleton/releases/download/2.0.4/Skeleton-2.0.4.zip)
- Clone the repo: `git clone https://github.com/dhg/Skeleton.git` (Note: this is under active development, so if you're looking for stable and safe, use the zipped download)

## SkinAndBones-Skeleton
SkinAndBones-Skeleton is a template based on the Skeleton boilerplate. It was developed to flesh out the basic boilerplate with common features of a basic website, such as a slideshow and navigation, turning it into more of a UI framework, for use in quickly comping up a functional website.

CSS and JavaScript for various components are added as seperate files so they can be added or deleted as quickly, as necessary. For instance, 'styles-basic.css' containes the code for links, buttons, forms, lists, code, tables, spacing and utilities. The file is in the project, but not linked to the html, so that those things can be copied and pasted into the 'base.css' as needed. 
[Download the  SkinAndBones zip](https://github.com/suedinym/SkinAndBones-Skeleton/archive/master.zip)
- Clone the repo: `git clone https://github.com/suedinym/SkinAndBones-Skeleton.git`

### What's in the download?

The original download includes Skeleton's CSS, Normalize CSS as a reset, a sample favicon, and an index.html as a starting point. SkinAndBones-Skeleton includes:

```
Skeleton/
├── index.html, a credits page, and a placeholder.html
├── js/
│   ├── *better-simple-slideshow.js (Slideshow only requires one of these.)
│   ├── *better-simple-slideshow.min.js (Slideshow only requires one of these.)
│   ├── site.js
│   ├── *accordion.js
│   └── *hammer.min.js
├── css/
│   ├── *normalize.min.css
│   ├── faq-style.css (Faq accordion)
│   ├── accordion.css
│   ├── multiple-modal.css
│   ├── base.css
│   ├── *simple-slideshow-styles.css
│   ├── styles-basic.css (holds the basic skeleton styles you may want to add back in.)
│   └── *skeleton.css
├── pages/
│   ├── gallery1.html
│   ├── gallery2.html
│   ├── gallery3.html
│   ├── gallery4.html
│   ├── faq.html
│   ├── icons.html (vertical icons)
│   ├── nav6.html (Six tab horizontal navigation)
│   ├── nav8.html (Eight tab horizontal navigation)
│   ├── sliding-side-nav.html
│   ├── sliding-side-nav-accordionc.html
│   └── sliding-top-nav.html
├── fonts/ (just a folder)
└── images/
    └── favicon.ico, logo.png, logo5.png, arrow_up.png, arrow_down.png
      ├── gallery/
      │   └── images 1 thru 10
      ├── icons/
      |  └── enlarge.svg, info.png, home.svg
      ├── bg/
      |  └── tile-blk.jpg (background)
      └── slides/
       └── skel-slides 1 thru 4

```

It looks like a lot, but the good news is that you probably won't want or need to change much if anything in the files with an asterisk * next to them.

### Why it's awesome

The basic Skeleton boilerplate is lightweight and simple. It styles only raw HTML elements (with a few exceptions) and provides a responsive grid. Nothing more.

SkinAndBones-Skeleton adds:
- A Better Simple Slideshow
- Side navigation with and without multilevel accordion menus
- Sliding top navigation
- Two arrangements of horizontal navigation
- Additional folders to aid in organization
- Gallery pages with a css modal
- The grid and basic style codes are seperated
- A login modal

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
 http://diffuse.sourceforge.net/
## License

All parts of Skeleton are free to use and abuse under the [open-source MIT license](https://github.com/dhg/Skeleton/blob/master/LICENSE.md).


## Colophon

Skeleton was built using [Sublime Text 3](http://www.sublimetext.com/3) and designed with [Sketch](http://bohemiancoding.com/sketch). The typeface [Raleway](http://www.google.com/fonts/specimen/Raleway) was created by [Matt McInerney](http://matt.cc/) and [Pablo Impallari](http://www.impallari.com/). Code highlighting by Google's [Prettify library](https://code.google.com/p/google-code-prettify/). Icons in the header of the documentation are all derivative work of icons from [The Noun Project](http://thenounproject.com). [Feather](http://thenounproject.com/term/feather/22073) by Zach VanDeHey, [Pen](http://thenounproject.com/term/pen/21163) (with cap) by Ed Harrison, [Pen](http://thenounproject.com/term/pen/32847) (with clicker) by Matthew Hall, and [Watch](http://thenounproject.com/term/watch/48015) by Julien Deveaux.

SkinAndBones-Skeleton was built using Bluefish Editor. Diffuse, graphical tool for merging and comparing text files, was used to compare the PHP template, files on the live github.io site (https://suedinym.github.io/skel-index.html) and merge them with the html template.  http://diffuse.sourceforge.net/
Slideshow images - Dover (public domain)
Multi-level Accordion was created by Ryan Bobrowski. http://codepen.io/rbobrowski/pen/likvA
Skeleton was created by Dave Gamache for a better web. http://getskeleton.com/
A Better Simple Slideshow http://leemark.github.io/better-simple-slideshow/
Hammer.JS Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>
Modals are based on the article "Creating a modal window with HTML5 & CSS3" at Webdesigner Depot by KEENAN PAYNE. http://www.webdesignerdepot.com/2012/10/creating-a-modal-window-with-html5-and-css3/
Accordion with CSS3, based on Codrops article by Mary Lou https://tympanus.net/codrops/2012/02/21/accordion-with-css3/

## Acknowledgement
Skeleton was created by [Dave Gamache](https://twitter.com/dhg) for a better web.
SkinAndBones-Skeleton was created by Susan Jensen - to put a little meat on those bones.
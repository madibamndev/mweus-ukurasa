# Mweus Ukurasa 

![Mweum Logo](assets/logo/mweus-ukurasa-brand-logo.svg)

This is my *official website* that is aimed at showcasing my talents, creativity and learning with regards to *web development*. helping you understand words and expressions that are commonly used by sheng speakers.

The site can be navigated using the 5 major navigation links below:
```
 Home
 Portfolio
 Ukurasa
 Contact
 blog 
```

## UX

As a user I want to my *wesbsite* to be easy to navigate, clearly labelled and intuitive in order to facilitate a pleasant *user experience*.

This is [Mweus Ukurasa Site PDF Mockup](assets/images/screenshots/mweus-ukurasa-screenshots-of-site-layout.pdf) of how the site looks. 


## Features

### The Colour palettes and Font Families for this site are as shown below:

```
/* ----------------------- General styling */

body {
    background-color: #005895;
    font-family: Jost, sans-serif;
    font-size: calc(16px + (20 - 16) * ((100vw - 300px)/ (2500 - 300)));
    line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
    color: #fff8dc;
    font-family: 'Port Lligat Slab', serif;
}

p {
    color: #fafad2;
    font-family: jost, sans-serif;
    letter-spacing: .0625em;
    line-height: 1.6;
}

a {
    color: #ffff00;
    text-decoration: none;
}

a:hover {
    color: #ffff25;
}

legend {
    color: #fff8dc;
}

figcaption {
    color: #ffdead !important;
}

cite {
    color: #00aeff;
}

video {
    max-width: 100%;
    height: auto;
}

i {
    color: #fff8dc;
}

hr {
    border-bottom: 3px solid #fff8dc;
}

strong {
    color: #ffff25;
    font-family: Jost, sans-serif;
    line-height: 1.6;
}

em {
    color: #f9f871;
    line-height: 1.6;
}

small {
    color: #fff8dc;
    font-family: Jost, sans-serif;
}

.breadcrumb-item a {
    color: #19ff38;
}

.breadcrumb>.active {
    color: #fafad2;
}

.card {
    background-color: #0767ac;
}

#map {
    width: 100%;
    height: 400px;
}

```

### Google Fonts

[Google Fonts](https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Josefin+Sans:wght@300&family=Markazi+Text:wght@500&display=swap)

```
Fonts Families:
    - Josefin Sans
    - Markazi Text
    - Cormorant Garamond
```

#### General Page Layout

Below is the General Page Layout:

```
 <!DOCTYPE html>
<html lang="en">

<head>
    <!-- Meta links -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="Description" content="This is a personal website showcasing my talents, skills and knowledge in my journey as a Web Developer.">
    <!-- Googlegetmanager -->
    <link rel="preconnect" href="www.googletagmanager.com">
    <!-- Fontawesome Kit -->
    <link rel="preconnect" href="kit.fontawesome.com">
    <!-- Google analytics -->
    <link rel="preconnect" href="https://www.google-analytics.com">
    <script data-ad-client="ca-pub-6343169593553881" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <!-- Import Google Fonts -->
    <link rel="preconnect stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400&family=Pompiere&family=Port+Lligat+Slab&display=swap">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <!-- Title content -->
    <title>Mweu's Ukurasa - Home</title>
    <link rel="apple-touch-icon" sizes="180x180" href="assets/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="192x192" href="assets/favicons/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/favicons/favicon-16x16.png">
    <link rel="manifest" href="assets/favicons/site.webmanifest">
    <link rel="mask-icon" href="assets/favicons/safari-pinned-tab.svg" color="#005895">
    <meta name="msapplication-TileColor" content="#005895">
    <meta name="theme-color" content="#005895">
    <!-- styles.css -->
    <link rel="preconnect stylesheet" href="assets/css/styles.css" type="text/css">
</head>

<body>
    <!-- Nav content starts here -->
    <nav class="navbar navbar-expand-lg navbar-dark shadow-lg" style="background-color: #0767ac;">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="assets/logo/mweus-ukurasa-brand-logo.svg" style="width: 130; height: 100;" alt="Logo face sketch inside three rotating Circles using SVG surrounded by the text Mweu's at top right position and the text Ukurasa in the bottom left position">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="portfolio.html">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="ukurasa.html">Ukurasa</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="blog.html">Blog</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2 gcse-searchbox" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    <!-- Nav content ends here -->
    <!-- Header content starts here -->
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div class="py-3">
                        <h1>Karibu!</h1>
                        <p>Welcome to <em>Mweu's Ukurasa</em> a space where creativity is the golden rule.</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Header content ends here -->
    <!-- Google Search content starts here -->
        <aside>
            <div class="container-fluid pb-3">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 offset-xl-2 offset-lg-2">
                        <div class="rounded-3" style="background-color: #0767ac;">
                            <div class="gcse-search"></div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    <!-- Google Search content ends here -->
    <!-- Main content starts here -->
    <main>
        <!-- Hero Carousel content starts here -->
        <article>
            <h2 class="text-center h1 p-3">Projects Slideshow</h2>
            <div class="container-fluid pb-3">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 offset-lg-2 offset-xl-2">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="assets/images/screenshots/personal-portfolio-screenshot.webp" class="d-block w-100 rounded-lg shadow-lg" style="width: 1280; height: auto;" alt="Screenshot of my Personal Portfolio Site">
                                </div>
                                <div class="carousel-item">
                                    <img src="assets/images/screenshots/mtalii-screenshot.webp" class="d-block w-100 rounded-lg shadow-lg" style="width: 1280; height: auto;" alt="Screenshot of Mtalii Site">
                                </div>
                                <div class="carousel-item">
                                    <img src="assets/images/screenshots/sheng-jargon-screenshot.webp" class="d-block w-100 rounded-lg shadow-lg" style="width: 1280; height: auto;" alt="Screenshot of Sheng Jargon Site">
                                </div>
                                <div class="carousel-item">
                                    <img src="assets/images/screenshots/personal-portfolio-screenshot.webp" class="d-block w-100 rounded-lg shadow-lg" style="width: 1280; height: auto;" alt="Screenshot of  MySite">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    <!-- Hero Carousel content ends here -->
    </main>
    <!-- Main content ends here -->
    <!-- Footer content starts here -->
        <footer>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div class="d-flex justify-content-center">
                            <p class="px-2 py-3">
                                Follow me on
                                <a class="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mweu-ngolia-321692167/">
                                    <strong>Linkedin</strong>
                                </a>
                                and 
                                <a class="github" target="_blank" rel="noreferrer" href="https://github.com/madibamndev?">
                                    <strong>GitHub</strong>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    <!-- Footer content ends here -->
    <!-- breadcrumb nav content starts here -->
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item active" aria-current="page">Home</li>
            <li class="breadcrumb-item"><a href="portfolio.html">Portfolio</a></li>
            <li class="breadcrumb-item"><a href="ukurasa.html">Ukurasa</a></li>
            <li class="breadcrumb-item"><a href="contact.html">Contact</a></li>
            <li class="breadcrumb-item"><a href="blog.html">Blog</a></li>
        </ol>
    </nav>
    <!-- breadcrumb nav content ends here -->
    <!-- copyright content starts here -->
    <div class="container-fluid text-center py-4">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <small>© Copyright 2020 Mweu's Ukurasa<br><em>All rights Reserved</em></small>
            </div>
        </div>
    </div>
    <!-- copyright content ends here -->
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script type="text/javascript" async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    <!-- Google Search Script -->
    <script async src="https://cse.google.com/cse.js?cx=8cd1eb912b846eebb"></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script type="module">
        function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-179191465-1");
    </script>
    <script type="module" async src="https://www.googletagmanager.com/gtag/js?id=UA-179191465-1"></script>
</body>
</html>
```

### Existing Features


#### Portfolio Page

Feature 1 (Project Gallery) &mdash; *allows the user to see the see the screenshot of a project as well as a link to the project.*

```
 <section>
    <h3>Project 1</h3>
    <figure id="personal-portfolio-site-wrapper">
        <img src="assets/images/screenshots/personal-portfolio-site-cover-page-screenshot.png"
                        alt="Screenshot of personal portfolio site cover page" class="responsive-img">
        <figcaption>
            <a href="https://madibamndev.github.io/personal-portfolio-site/" target="_blank" rel="noreferrer">
                <i class="fas fa-link" style="color: #F40F02;"> <strong>Personal PortFolio Site</strong></i>
            </a>
        </figcaption>
    </figure>
</section>
```

#### Ukurasa Page

Feature 2 (Tutorial Videos) &mdash; *allows the user to see a tutorial video.*

```
<section>
    <h3>Using Visual Studio Code</h3>
    <video preload="auto" width="500" controls poster="assets/videos/thumbnails/visual-studio-code.mp4.png">
        <source src="assets/videos/visual-studio-code.mp4" type="video/mp4">
        <source src="assets/videos/visual-studio-code.oggtheora.ogv" type="video/ogg">
        <source src="assets/videos/visual-studio-code.webmhd.webm" type="video/webm">
        <source src="assets/videos/visual-studio-code.webmsd.webm" type="video/webm">
        Your browser doesn't support HTML5 video tag.
    </video>
    <p>
        <strong>Description:</strong> Code editor of choice. Installation, overview, shorcuts,
                    extentions, customizations and general use.
    </p>
    <p>
        link to
            <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                <i class="fas fa-paperclip" style="color: #F40F02;"></i> Visual Studio Code
            </a>
         official website.
    </p>
</section>
```

### Features Left to Implement

```
 Forms
 Content
 Music
 Tutorials
 Animations
 Photos
 Events
 Blog
```

## Technologies Used in this Build

- [Google Fonts](https://fonts.googleapis.com/css2?family=Jost:wght@300;400&family=Pompiere&family=Port+Lligat+Slab&display=swap) &mdash; The Font Families used

- [Heroku](https://www.heroku.com/) &mdash; Application Deployment

- [Python](https://www.python.org/downloads/) &mdash; Programming Language

- [Stack Overflow](https://stackoverflow.com/) &mdash; Troubleshooting

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) &mdash; Back-End NoSQL Database

- [Visual Studio Code](https://code.visualstudio.com/) &mdash; Editor used

## Testing

- [CSS Validator](https://jigsaw.w3.org/css-validator/) &mdash; Validating CSS files

- Automated browser Testing [Google Lighthouse ext](https://developers.google.com/web/tools/lighthouse#devtools) 

- Testing was also conducted manually whereby friends and family browsed clicked the link sent and navigated through the site on various devices and gave their feedback in the process of making this site. 

- [HTML5 Valivator](https://html5.validator.nu/) &mdash; Validating HTML5 files

- [HTML Valivator](https://validator.w3.org/) &mdash; Validating HTML files

## Deployment

In order to deploy your site to [GitHub](https://github.com/) read the following guidelines on [Getting Started with GitHub Pages](https://guides.github.com/features/pages/). 

## Credits

### Content


Below are examples of *Sources* used as inspiration for my project 

* [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/) 
* [Favicon Generator](https://realfavicongenerator.net/)
* [Auto-fit vs Auto-fill](https://gridbyexample.com/examples/example37/)
* [Min & Max Content Sizing in CSS Grid — 1/3 Flexibility (Jen Simmons YouTube)](https://www.youtube.com/watch?v=lZ2JX_6SGNI)
* [FR Units in CSS Grid — 2/3 Flexibility (Jen Simmons YouTube)](https://www.youtube.com/watch?v=ZPtpzuRajzM)
* [MinMax in CSS Grid — 3/3 Flexibility (Jen Simmons YouTube)](https://www.youtube.com/watch?v=mVQiNpqXov8)
* [Symbols HTML code (Toptal Designers)](https://www.toptal.com/designers/htmlarrows/arrows/)


### Media

The image placeholder slides used in this project are in the SVG format and were drawn by myself using adobe Xd. Equally the logo is also in SVG format and was designed by myself using Adobe Illustrator. 

### Acknowledgements

My biggest inspiration with this project is to create my own personal website that will showcase my progress in the field of *Web Development* as I continue adding more content and making improvements to the site. 
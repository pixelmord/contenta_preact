# Contenta Demo with Preact, Freactal (state mgmt) and Styled Components

Version: 0.2.0 [![Build Status](https://travis-ci.org/pixelmord/contenta_preact.svg?branch=master)](https://travis-ci.org/pixelmord/contenta_preact) 
  <a href='https://coveralls.io/github/pixelmord/contenta_preact?branch=master'><img src='https://coveralls.io/repos/github/pixelmord/contenta_preact/badge.svg?branch=master' alt='Coverage Status' /></a>
  
**THIS WIP IN PROGRESS CURRENTLY!!**

I use this project to learn new things ([contenta](http://www.contentacms.org/), [preact], [freactal](https://github.com/FormidableLabs/freactal), [styled-components](https://www.styled-components.com) ...)

## The roadmap is as follows:

- integrate with contenta CMS using jsonAPI by leveraging:
    -   ✔ freactal as state management
    -   ✔ superagent-jsonapi
- modeling the frontend around the recipe-coocking-magazine use-case:
    -   ✔ styled-components for CSS style in JS
    - complete frontend as shown in [Wireframes](https://www.drupal.org/node/2818741#comment-12114776)
    - create a living styleguide with e.g. react-styleguidist
- Search with e.g. [ElasticlunrJS](http://elasticlunr.com/)
- implement SSR and refine service worker for offline
- content-editor interface

# Quick-Start Guide

- [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Structure](#structure)
- [Handling URLS](#handling-urls)
- [React Compatibility](#react-compatibility)


## Installation

**1. Clone this repo:**

```sh
git clone --depth 1 https://github.com/pixelmord/contenta_preact.git my-app
cd my-app
```


**2. Make it your own:**

```sh
rm -rf .git && git init && npm init
```

> :information_source: This re-initializes the repo and sets up your NPM project.


**3. Install the dependencies:**

```sh
npm install
```

> You're done installing! Now let's get started developing.



## Development Workflow


**4. Start a live-reload development server:**

```sh
npm run dev
```

> This is a full web server nicely suited to your project. Any time you make changes within the `src` directory, it will rebuild and even refresh your browser.

**5. Testing with `mocha`, `karma`, `chai`, `sinon` via `phantomjs`:**

```sh
npm test
```

> 🌟 This also instruments the code in `src/` using [isparta](https://github.com/douglasduteil/isparta), giving you pretty code coverage statistics at the end of your tests! If you want to see detailed coverage information, a full HTML report is placed into `coverage/`.

**6. Generate a production build in `./build`:**

```sh
npm run build
```

> You can now deploy the contents of the `build` directory to production!
>
> **[Surge.sh](https://surge.sh) Example:** `surge ./build -d my-app.surge.sh`
> 
> **[Netlify](https://www.netlify.com/docs/cli/) Example:** `netlify deploy`
>
> [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pixelmord/contenta_preact)


**5. Start local production server with [serve](https://github.com/zeit/serve):**

```sh
npm start
```

> This is to simulate a production (CDN) server with gzip. It just serves up the contents of `./build`.



---


## Structure

Apps are built up from simple units of functionality called Components. A Component is responsible for rendering a small part of an application, given some input data called `props`, generally passed in as attributes in JSX. A component can be as simple as:

```js
class Link extends Component {
  render({ to, children }) {
    return <a href={ to }>{ children }</a>;
  }
}
// usage:
<Link to="/">Home</Link>
```


---


## Handling URLS

:information_desk_person: This project contains a basic two-page app with [URL routing](http://git.io/preact-router).

Pages are just regular components that get mounted when you navigate to a certain URL. Any URL parameters get passed to the component as `props`.

Defining what component(s) to load for a given URL is easy and declarative. You can even mix-and-match URL parameters and normal props.

```js
<Router>
  <A path="/" />
  <B path="/b" id="42" />
  <C path="/c/:id" />
</Router>
```


---


## React Compatibility

This project includes [preact-compat] alias in as `react` and `react-dom` right out-of-the-box.  This means you can install and use third-party React components, and they will use Preact automatically!  It also means that if you _don't_ install third-party React components, `preact-compat` doesn't get included in your JavaScript bundle - it's free if you don't use it 👍

---


## License

MIT


[Preact]: https://github.com/developit/preact
[preact-compat]: https://github.com/developit/preact-compat
[webpack]: https://webpack.github.io

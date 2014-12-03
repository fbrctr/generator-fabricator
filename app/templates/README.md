# <%= projectName %>

The <%= projectName %> UI toolkit is a tool for rapid website development. It provides a set of fully-functional components and structures that can be used to build scalable web pages.

## Getting Started

<%= projectName %> requires [node.js](http://nodejs.org). Make sure your have `v0.10` or higher installed before proceeding.

**Start the local development environment:**

`$ npm start`

### Development Environment Features

- Live preview sever (using [BrowserSync](http://www.browsersync.io/))
- CSS Autoprefixing
- Sass compilation
- Browserify bundling
- Image optimization

## Build

**Build for production release:**

`$ npm run build`

Fabricator builds both a static documentation site and optimized CSS and JS toolkit files.

The build artifacts output to the `dist` directory. This can be deployed to any static hosting environment - no language runtime or database is required.

# Reflexive
AngularJS Material Design Gulp SASS Web Starter Kit

## AngularJS Application with Material Design Specification
REFLEXIVE is made with care from AngularJS and uses Googles Material Design instead of the standard Bootstrap setup.  This makes the application super fast, lightweight and responsive, while keeping it tied to industry standard best practices.
### Automation and Task's by Gulp
Gulp is a wonderful streaming build service for Modern Front End Applications and SPA's.
### Styles by SASS
SASS allows designers to create component styles and uses things like variables and mixins which are not allowed in native CSS
### Prerequisites:
First you will need a couple of things to get started...

- Node
- Gulp
- Yeoman

#### Setup
Setup is easy and takes only a couple of minutes:

    $ npm-install
    $ bower-update

#### Initial Build
Build an optimized version of your application in folder dist

    $ gulp
#### Deploy Locally
Start BrowserSync server on your source files with live reload

    $ gulp serve
#### Run Unit Tests
Run your unit tests with Karma

    $ gulp test

Run your unit tests with Karma in watch mode

   $ gulp test:auto
#### Test Distributed Version Locally
Start BrowserSync server on your optimized application without live reload

    $ gulp serve:dist

#### e2e
Launch your e2e tests with Protractor

   $ gulp protractor

#### e2e Dist
Launch your e2e tests with Protractor on the dist files

   $ gulp protractor:dist

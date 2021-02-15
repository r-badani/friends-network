# FriendsNetwork

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

![landingPage](https://github.com/r-badani/friends-network/blob/main/docs/assets/landingPageWithTooltip.jpg)

## App Architecture

Based on the requirement of User being able to add name, friends, age and weight to the application I came up with the following structure

![App structure](https://github.com/r-badani/friends-network/blob/main/docs/assets/AppStructure.jpg)

App will hold one feature module called `Friends` and a D3 component that will help us visualize the relationship between friends called `network-chart`

## Use cases

Here are some of the usecase a user may come across

- `New` user is adding information for the first time with new friends
- `New` user is adding friends that already exists in the network
- `Existing` user is adding information about friends that are new to the Network
- `Existing` user is adding information about friends that are already in the Network

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

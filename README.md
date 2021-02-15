# Friends Network

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

![landingPage](https://github.com/r-badani/friends-network/blob/main/docs/assets/landingPageWithTooltip.jpg)

## DEMO

![Basic Demo](https://github.com/r-badani/friends-network/blob/main/docs/assets/basicDemo.gif)

*colors on video may appear dull, please visit [site here](https://friends-network.vercel.app/) 

## App Architecture

Based on the requirement of User being able to add name, friends, age and weight to the application I came up with the following structure

![App structure](https://github.com/r-badani/friends-network/blob/main/docs/assets/AppStructure.jpg)

App will hold one feature module called `Friends` and a D3 component that will help us visualize the relationship between friends called `network-chart`

`Network-chart` each node represents a user and links between the nodes represents the relationship between them which in 'friends'

For the look and feel we are adding avatar to the nodes to bring that human touch and on mouse over we provide more information of the user i.e age, weight and name. 

## Ngrx

App is using ngrx for state management, here are actions that the ngrx store handles

![App structure](https://github.com/r-badani/friends-network/blob/main/docs/assets/ngrxActions.gif)

### Actions

- [Friend-Network] load friend records
- [Friend-Network] load friend records successful
- [Friend-Network] load friend records unsuccessful
- [Add-friend] Add friend entry
- [Add-friend] Adding friends successful
- [Add-friend] Adding friends unsuccessful

In the application when a user arrives to fill out the form, we simply add the friends to the user collection. The relation ship are stored in the links collection using the users id attribute.

## Unit tests

For the application based on available time I have added few unit tests that test the core features and you can run them using `ng test`

![Unit test](https://github.com/r-badani/friends-network/blob/main/docs/assets/unitTests.png)

## E2E with Cypress

I am using Cypress to do the e2e tests, you can run is locally using `ng e2e`

![E2E Tests](https://github.com/r-badani/friends-network/blob/main/docs/assets/cypressE2E.gif)


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

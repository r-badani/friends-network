# Friends Network

A web application that allows users to visualize their network of friends.

![landingPage](https://github.com/r-badani/friends-network/blob/main/docs/assets/landingPageWithTooltip.jpg)

## DEMO

![Basic Demo](https://github.com/r-badani/friends-network/blob/main/docs/assets/basicDemo.gif)

*colors on video may appear dull, please visit [site here](https://friends-network.vercel.app/) 

## App Architecture

Based on the requirement of User being able to add name, friends, age and weight to the application, I came up with the following structure.

![App structure](https://github.com/r-badani/friends-network/blob/main/docs/assets/AppStructure.jpg)

App will hold one feature module called `Friends` and a D3 component that will help us visualize the relationship between friends called `network-chart`

 Each node in `network-chart` represents a user and a link between the nodes represents the relationship between them.

For the look and feel, we are adding avatar to the nodes to bring that human touch. On mouse over, we provide more information of the user i.e age, weight and name.

## Ngrx

App is using ngrx for state management. Here are the actions that ngrx store handles.

![App structure](https://github.com/r-badani/friends-network/blob/main/docs/assets/ngrxActions.gif)

### Actions

- [Friend-Network] load friend records
- [Friend-Network] load friend records successful
- [Friend-Network] load friend records unsuccessful
- [Add-friend] Add friend entry
- [Add-friend] Adding friends successful
- [Add-friend] Adding friends unsuccessful

## Unit tests

For the application, I have added few unit tests to test the core features. You can run them using `ng test`.

![Unit test](https://github.com/r-badani/friends-network/blob/main/docs/assets/unitTests.png)

## E2E with Cypress

I am using Cypress for e2e tests. You can run it locally using `ng e2e`.

![E2E Tests](https://github.com/r-badani/friends-network/blob/main/docs/assets/cypressE2E.gif)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# cypress-component

Cypress Component Demo with a Counter React component.

# Check the information about this repo.

You can find all the information about it on this incredible Genially :)

https://view.genial.ly/64536a9a3140d6001274a16a

# Join the meetup or watch the streaming!

Join the live meetup here: https://www.eventbrite.es/e/entradas-all-in-pruebas-automatizadas-638552396407

Or, check the streaming session: https://www.youtube.com/watch?v=OK8i2ExZl-o

This talk is also a part of the Mes de QA, you can check the website here! https://lugspain.github.io/mesdeqa/

# How to run the tests.

The React app and the tests live in the `my-new-sample-app` folder. You need [Node.js](https://nodejs.org/) and npm.

```bash
cd my-new-sample-app
npm install --legacy-peer-deps
```

`--legacy-peer-deps` is needed because `react-scripts` 5 has peer dependency conflicts with newer packages.

Run the component tests headless:

```bash
npm test
```

Or open Cypress and run the spec from the UI:

```bash
npm run open
```

To see the React application in your localhost, run `npm run start`.

The Counter component is in `src/Counter.jsx` and its component test in `cypress/component/Counter.cy.js`. The tests run with Cypress 13: Cypress 14 removed support for Create React App.

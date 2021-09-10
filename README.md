# Webpack React Banking

A simple, from scratch, Webpack, React and Typescript project which fetches some dummy transaction data and renders it

# Local Development

Run `npm start` and visit `localhost:3000`.

`npm start` runs a webpack dev server.

# Build

Run `npm run build` and inspect `/dist`.

Runs `webpack` and outputs bundles files to `/dist`.

# Test

Run `npm test`.

Runs `jest` and used react testing library.

# Lint

Run `npm run lint`.

Runs `eslint` with react and prettier config.

# POA

- will copy (updating where necessary) setup from a previous webpack + React + Typescript + Linting side project I created for following an article and learning more about webpack
- will probably create (or copy if can find a simple one) a react hook for fetching data. Should take `sort` and `limit` arguments - this will allow for smallest 10 to be retrieved
- given size of list from mock data endpoint should fetch all data in one then sort and limit on client side - not sure how to incorporate that into the hook yet - maybe one for fetching and one for manipulation. Will make for quicker loading times.
- Will need to handle loading, error and success states for the transaction list
- Given data is from "Monzo", might try and copy rough design from their app. Also found some inspiration on Dribble.

# Log

- 0:07:15 - finished reading instructions and taking notes
- 0:17:00 - finished getting design inspiration, moving on to project setup
- 0:32:00 - setup project with linting
- 1:00:00 - setup webpack with dev server. Had some hiccups with resolve paths (didn't account for js third party code) and copy plugin (errors when only index.html in public)
- 1:13:00 - added styled components
- 1:18:00 - added testing
- 1:38:00 - normalize styles, create page and dummy account card component
- 2:23:00 - copy and update useFetch hook - first time using useReducer so took a little time
- 2:43:00 - create basic transactions and transaction components
- 3:00:00 - create sort component
- 3:10:00 - create limit component
- 3:10:00 - functionally complete - need to polish
- 3:15:00 - ad basic test for account card
- 3:30:00 - add basic styling to account card
- 4:00:00 - add basic styling to transaction list

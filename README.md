# FilmSF
App that helps film lovers to find the film locations in SF.

## Installaion
```
npm install
```
## Running server
`npm start` in one console
`npm run bundle` in another

## Front-end
Frontend is written in
`Javascript ES6`
`React.js`, `Redux`
`Materialize CSS`,
`Font Awesome`,
`Webpack`,
`Babel`

## Back-end
Server side is written in `Node.js` using `Express`.
Used `MongoDB` as database with `Mongoose` ODM.
Used `Cron` as worker to query places coordinates from `Node.js Client for Google Maps Services`

## API
Film locations from [DataSF](http://www.datasf.org/): [Film
Locations](https://data.sfgov.org/Arts-Culture-and-Recreation-/Film-Locations-in-San-Francisco/yitu-d5am)<br />
Poster Image from [The Movie DB](https://developers.themoviedb.org/)<br />
Goole Maps Service<br />
Google Fonts<br />


### Code style
Following Airbnb's style guidelines using `eslint-config-airbnb`.


## TODO:
- host on heroku
- add list view
- add film poster to list result & info window
- add bookmark function
- refactor style

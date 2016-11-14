import React from 'react';
import SearchBar from './SearchBar';

function About() {
  return (
    <div>
      <SearchBar />
      <div className="about">
        <div className="content">
          <div className="row">
            <div className="col s4">
              <a href="http://github.com/tiffanyip/FilmSF">
                <img src="../assets/GitHub-Mark-120px-plus.png" />
              </a>
            </div>
            <div className="col s8 valign">
              Github Repository: <br/>
              <a href="http://github.com/tiffanyip/FilmSF">
                http://github.com/tiffanyip/FilmSF
              </a>
            </div>
          </div>
          <div className="row valign-wrapper">
            <div className="col s4">
              <a href="https://www.themoviedb.org/">
                <img src="../assets/moviedb-icon.png" />
              </a>
            </div>
            <div className="col s8 valign">
              <a href="https://www.themoviedb.org/">
                The Movie DB
              </a>
            </div>
          </div>
          <div className="row valign-wrapper">
            <div className="col s4">
              <a href="https://data.sfgov.org/Culture-and-Recreation/Film-Locations-in-San-Francisco/yitu-d5am/data">
                <img src="../assets/data-sf-icon.png" />
              </a>
            </div>
            <div className="col s8 valign">
              <a href="https://data.sfgov.org/Culture-and-Recreation/Film-Locations-in-San-Francisco/yitu-d5am/data">
                Data SF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

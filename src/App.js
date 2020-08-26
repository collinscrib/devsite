import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Navigator from './components/Navigator.js';

function App() {
  return (
    <Router>
      <Route path={`/`} exact component={LandingPage} />
      <Route path={`/about`} exact component={AboutMe} />
      <Route path={`/professional`} exact component={Professional} />
      <Route path={`/links`} exact component={Links} />
    </Router>
  );
}

function LandingPage() {
  return (
    <div className="App">
      <Navigator />
      <div id="mainText" className="vertical-center text-center">
          <h1 class="clip-text">Collin Scribner</h1>
          <p class="secondary-text swing">
            Junior Computer Science student at Texas A&M University <Emoji symbol="👍" label="thumbs up"/>
          </p>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="App">
      <Navigator />
      <div className="vertical-center">
        <div className="text-center">
          <p class="secondary-text text-center aboutMe">
              Howdy! Welcome to my personal website.
              I study Computer Science at Texas A&M University with a minor in 
              Cyber Security. I'm very passionate about technology and service,
              and like to code in my freetime. Feel free to take a look at
              my GitHub profile to see some of my work and contact me if you 
              have any questions.
          </p>
        </div>
        <div className="text-center">
          <Button variant="outline-secondary" size="sm">Contact Me</Button>
        </div>
      </div>
    </div>
  );
}

function Professional() {
  return (
    <div className="App">
      <Navigator />
      <container className="vertical-center resume">
          <div className="text-center resume">
            <iframe title="Resume" src="/resume.pdf" width="100%" height="100%"/>
          </div>
        </container>
      </div>
  );
}

function Links() {
  return (
    <div className="App">
      <Navigator />
      <container className="text-center vertical-center">
        <div className="text-center portfolio">
          <p class="secondary-text">
            I plan to do many things during my college career for my career development, such as 
            significant contribution to more open source software such as the ROS community and 
            development of larger projects that have specific use-cases. 

            Below is a link to my GitHub profile and LinkedIn profile. My notable achievements include:
          </p>
          <ul>
            <li>Development of my own video game (Tiny Hero) as part of a weekend-long game jam</li>
            <li>Open source contribution to the ROS (Robot Operating System) community and Plus One Robotics software</li>
            <li>Numerous small-scale scripts and projects</li>
          </ul>
          <p class="secondary-text">
            I am very experienced and motivated, and will tackle almost any problem or project that is thrown at me.
            If you have a project that you think may suit my eperience, please don't hesitate to contact me 
            at <a href="mailto:collinscribner13@gmail.com">collinscribner13@gmail.com</a>.
          </p>
        </div>
        <div className="text-center">
          <Button className="linkButton" variant="outline-secondary" size="sm" href="https://github.com/collin-scribner">GitHub</Button>
          <Button className="linkButton" variant="outline-secondary" size="sm" href="https://linkedin.com/in/collinscribner">LinkedIn</Button>
        </div>
      </container>
    </div>
  );
}

const Emoji = props => ( // from https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7
  <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
  >
      {props.symbol}
  </span>
);

export default App;

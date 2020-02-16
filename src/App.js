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
      <Route path={`/csce445`} exact component={CSCE445} />
      <Route path={`/csce445/assignment2`} exact component={CSCE445_page2} />
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

function CSCE445() {
  return (
    <div className="App">
      <Navigator />
      <container className="text-center vertical-center-csce">
        <div className="text-center portfolio">
            <div class="csce_img">
              <img src="/professionalImage.jpg" width="30%" height="30%"/>
            </div>
            <p class="secondary-text">
              This will be a main page for the class: CSCE445 - Computers and New Media.
              It will act as a home page for all assignments or writings that are
              completed for this class during the Spring 2020 semester. I am in this class
              so that I might know more about how computer science directly ties into the
              authoring and consumption of content using different media, as well as how
              I can be more aware of its effects going forward in my education and career.
              I am excited to learn a lot about these topics, especially as it relates to
              my personal view of intellectual property, since they are things I am passionate
              about and fascinated by.
            </p>
            <p class="secondary-text">
              The media I use everyday: 
            </p>
            <ul>
              <li>Television (Fantasy shows, comedy shows, movies, Netflix, etc.)</li>
              <li>Music (all kinds)</li>
              <li>Computer Games (competitive, shooting games, casual party games)</li>
              <li>Email</li>
              <li>Instant Messengers (iMessage, Facebook Messenger, GroupMe)</li>
            </ul>
            <p class="secondary-text">
              Below is a list of all assignments for the class.  
            </p>
            <ul>
              <li><a href="https://collinscribner.com">Assignment 1 - this website</a></li>
              <li><a href="https://collinscribner.com/csce445/assignment2">Assignment 2 - comparisons between classmates websites</a></li>
            </ul>
            <p class="secondary-text">
              Feel free to contact me at my school email, <a href="mailto:collin.scribner@tamu.edu">collin.scribner@tamu.edu</a>.
            </p>
        </div>
      </container>
    </div>
  );
}

function CSCE445_page2() {
  return (
    <div className="App">
      <Navigator />
      <container className="text-center vertical-center-csce">
        <div className="text-center portfolio assignment2">
            <p class="secondary-text">
            As I looked through the majority of the websites by other students that are taking this class, some common themes 
            that came up included a fascination with the way our society interacts with modern media, netflix and youtube as 
            primary video streaming services, and spotify and youtube being the primary music consumption platforms. Below 
            are some examples.
            </p>
            <p class="secondary-text">Modern media shaping our general interactions:</p>
            <ul>
              <li><a href="http://people.tamu.edu/~alizain/Media.html">example 1</a></li>
              <li><a href="http://people.tamu.edu/~alizain/Media.html">example 2</a></li>
            </ul>
            <p class="secondary-text">Video streaming similarities:</p>
            <ul>
              <li><a href="https://sites.google.com/a/tamu.edu/445-site/my-media">example 1</a></li>
              <li><a href="https://sites.google.com/tamu.edu/lauralara/home">example 2</a></li>
            </ul>
            <p class="secondary-text">Music streaming similarities:</p>
            <ul>
              <li><a href="https://sites.google.com/tamu.edu/roniphillips/csce-445/assignment-1?authuser=0">example 1</a></li>
              <li><a href="http://people.tamu.edu/~mtrea/CSCE445.html">example 2</a></li>
            </ul>
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

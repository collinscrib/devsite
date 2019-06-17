import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact={true} path="/" component={Homepage} />
        <Route path="/projects" component={Projects} />
      </Router>
    </div>
  );
}

const Homepage = () => {
  return (
    <div id="homepage">
      <Container>
        <Navbar bg="transparent" variant="dark" expand="lg" sticky="top">
          <Navbar.Brand href="">Collin Scribner</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="projects">Projects</Nav.Link>
              <Nav.Link href="resume.pdf">Resume</Nav.Link>
              <Nav.Link href="mailto:collinscribner13@gmail.com">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      <Container>
        <Jumbotron>
          <h1>Collin Scribner</h1>
          <p>Welcome to my personal website! I'm a junior Computer Science student at Texas A&M University, and I am a Software Engineer Intern at Plus One Robotics in San Antonio, Texas this summer. My github projects can all be found by clicking the "projects" tab above. Feel free to send me an email if you'd like to get in touch.</p>
          <Button variant="primary" href="mailto:collinscribner13@gmail.com">Contact</Button>
        </Jumbotron>
      </Container>
    </div>
  );
}

const Projects = () => {
  return (
    <div>
      <p><a href="/">Back</a></p>
      <p>
        TODO: Projects table will be here, auto updated with github list/info.
    </p>
    </div>
  );
}

const Error404 = () => {
  return (
    <p>
      Error 404. Page not found.
    </p>
  );
}


export default App;
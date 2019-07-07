import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

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
          <p>Welcome to my personal website! I'm a junior Computer Science student at Texas A&M University, and I am a Software Engineer Intern at Plus One Robotics in San Antonio, Texas for this summer. My github projects can all be found by clicking the "projects" tab above. Feel free to send me an email if you'd like to get in touch.</p>
          <Button variant="primary" href="mailto:collinscribner13@gmail.com">Contact</Button>
        </Jumbotron>
      </Container>
    </div>
  );
}

const Projects = () => {

  const data = [{
    name: 'MyProject',
    desc: 'A really cool github project',
    stars: 100,
    commits: 99,
    forks: 2,
    href: 'https://github.com/collin-scribner'
  }]

  const columns = [{
    Header: 'Project Name',
    accessor: 'name',
    Cell: GithubLink,
    // TODO: Add functionality for database of github links to pull stats from
  }, {
    Header: 'Description',
    accessor: 'desc',
    minWidth: 300
  }, {
    Header: 'Stars',
    accessor: 'stars'
  }, {
    Header: 'Commits',
    accessor: 'commits'
  }, {
    Header: 'Forks',
    accessor: 'forks'
  }]

  return (
    <div>
      <Container>
        <Jumbotron>
          <h4 align="right"><a href="/">Back</a></h4>
          <ReactTable
            data={data}
            columns={columns}
          />
        </Jumbotron>
      </Container>
    </div>
  );
}

function GithubLink({ link, value }) {
  return <a href={link}>{value}</a>
}

export default App;

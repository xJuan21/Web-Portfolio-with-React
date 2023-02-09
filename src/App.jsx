import './index.css';
import './App.css';
// import logo from './logo_01.png';

import NavBar from './components/navbar/Nav'
import Header from './components/header/Slider'
import About from './components/about/About'
import Socials from './components/socials/Socials'
import Projects from './components/projects/Projects'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'


function App() {
  return (
    <>
      <NavBar />
      <h1>
        <Header />
      </h1>
      <About />
      <Socials />
      {/* <Projects /> */}
      <Resume />
      <Contact />
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p><br></br>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> 
      </div>*/}
    </>
  );
}

export default App;

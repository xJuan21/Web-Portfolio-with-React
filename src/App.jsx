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
      <section id='About'/>
      <About />
      <Socials />
      <Projects />
      <Resume />
      <Contact />

      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> 
      </div>*/}
    </>
  );
}

export default App;

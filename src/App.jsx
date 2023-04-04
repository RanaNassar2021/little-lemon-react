import './App.css';
import './theme.css';
import React, {Component} from "react";
import { ChakraProvider } from '@chakra-ui/react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./shared/Logo-svg.png";
import Home from "./components/Home";
import About from "./components/AboutComponent";
import Reservation from "./components/Reservation";

class App extends Component{
  
    render(){
      let component 
      switch (window.location.pathname) {
          case "https://RanaNassar2021.github.io/little-lemon-react":
              component = <Home/>
              break;
              case "https://RanaNassar2021.github.io/little-lemon-react/About":
                  component = <About/>
               break;
               case "https://RanaNassar2021.github.io/little-lemon-react/Reservation":
                   component = <Reservation/>
               break;
      
          default:
              component = <Home/>
              break;
      }
  
        return(
            <>
           <ChakraProvider>
  <Navbar bg="secondary" variant="dark">
        <Container>
        <img src={logo} alt="logo" className="me-4"  />
          <Navbar.Brand href="https://RanaNassar2021.github.io/little-lemon-react" className='text-dark fw-bold'>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://RanaNassar2021.github.io/little-lemon-react/About" className='text-dark fw-bold'>About</Nav.Link>
            <Nav.Link href="https://RanaNassar2021.github.io/little-lemon-react/Reservation" className='text-dark fw-bold'>Reservation</Nav.Link>
           

          </Nav>
        </Container>
      </Navbar>
               <div className='row'>
                 {component}
               </div>
              
               </ChakraProvider>
            </>
        )
    }
}

export default App;
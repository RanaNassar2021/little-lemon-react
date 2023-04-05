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
          case "/":
              component = <Home/>
              break;
              case "/About":
                  component = <About/>
               break;
               case "/Reservation":
                   component = <Reservation/>
               break;
      
          default:
              component = <Home/>
              break;
      }
  
        return(
            <>
             <ChakraProvider>
            
           <div className='row'>
            <Navbar bg="secondary" variant="dark"  >
        <Container >
        <img src={logo} alt="logo" className="me-4"  />
          <Navbar.Brand href="/" className='text-dark fw-bold'>Home</Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link href="/About" className='text-dark fw-bold'>About</Nav.Link>
            <Nav.Link href="/Reservation" className='text-dark fw-bold'>Reservation</Nav.Link>
           

          </Nav>
        </Container>
      </Navbar>
      
      </div>
  
               <div className='row'>
                 {component}
               </div>
               
               </ChakraProvider>
            </>
        )
    }
}

export default App;
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
import {Route, Routes, Link} from 'react-router-dom';

class App extends Component{
  
    render(){
     
        return(
            <>
             <ChakraProvider>
            
           <div className='row'>
            <Navbar bg="secondary" variant="dark"  >
        <Container >
        <img src={logo} alt="logo" className="me-4"  />
          <Navbar.Brand className='text-dark fw-bold'>
            <Link to ="/">Home</Link>
          </Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link className='text-dark fw-bold'>
              <Link to='/about'>About</Link>
            </Nav.Link>
            <Nav.Link className='text-dark fw-bold'>
              <Link to='/reservation'>Reservation</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      </div>
  
               <div className='row'>
                <Routes>
                  <Route exact path='/' element={<Home/>} />
                  <Route exact path='/about' element={<About/>} />
                  <Route exact path='/reservation' element={<Reservation/>} />
                </Routes>
               </div>
               
               </ChakraProvider>
            </>
        )
    }
}

export default App;
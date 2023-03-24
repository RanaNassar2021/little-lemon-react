import React, {Component} from "react";
import Home from './components/Home';
import About from './components/AboutComponent';
import Header from "./components/Header";
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
             case "/Contact":
                 component = <Home/>
             break;
    
        default:
            component = <Home/>
            break;
    }
        return(
            <div>  
            <Header/>
            
                <div className="row">
                {component} 
                </div>
                </div>                                    
          
        )
    }
}

export default App;
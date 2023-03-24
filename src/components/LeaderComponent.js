
import React, {Component} from "react";
import {LEADERS} from '../shared/Leader';
import {Card, CardGroup} from "react-bootstrap";
class RenderLeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            leaders: LEADERS
        };

    }
    render(){
        const Leader = this.state.leaders.map((leader)=>{
            return(
                <div key={leader.id}>
                         <CardGroup>
                         <Card border="light" key={leader.id} className=" bg-dark m-0 ">
                        
                        <Card.Img className=" mx-auto w-50 p-3" src={leader.image} alt={leader.name} />
                        </Card>
                        <Card className="m-0">
                            <Card.Body className="bg-dark text-light ">
                            <Card.Title className="my-5">{leader.name}</Card.Title>
                            <Card.Text>{leader.description}</Card.Text>
                            </Card.Body>
                          

                        </Card>         
                         </CardGroup>
                  
                  

                </div>
            )
        })
        return(
            <div className="mt-5">
                <Card className="bg-dark text-light">
                    <Card.Title className="mt-3 ms-5">
                       <h2>Corporate Leadership</h2> </Card.Title>
                </Card>
              {Leader} 
            </div>
         
          
        )
    }
}

export default RenderLeader;
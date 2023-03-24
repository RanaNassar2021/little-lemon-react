import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import DishDetails from './dishDetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);  
    this.state={
      selectedDish: null
    };
       
    }  
    
    onDishSelect(dish){
      this.setState({selectedDish: dish})
    }

    renderDish(dish){
      if(dish!=null){
        return(

             <DishDetails
              selectedDish={this.state.selectedDish}/>
      
     )}  else{
        return <div></div>
      }
  }



    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id}  className="col-12 col-md-5 m-1" >
                  <Card key={dish.id} >
                  <Card.Img width="100%" src={dish.image} alt={dish.name} />
                  <Card.Body>
                      <Card.Title>{dish.name}</Card.Title>
                      <Card.Text>   {dish.description}   </Card.Text>
        <Button variant="primary"  onClick={()=> this.onDishSelect(dish)}>select this dish</Button>
      </Card.Body>
                  
                </Card>
              </div>
            );
        });

        return (
          <div className='bg-dark'>
          <div className="container">
            <div className="row ">
            
                  {menu}

                
            </div>
            </div>

        <div className='container'> 
      {this.renderDish(this.state.selectedDish)}
      </div>
      </div>
        );
    }
  }

export default Menu;
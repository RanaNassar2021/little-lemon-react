import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import DishDetails from './dishDetailComponent';
import food from '../shared/food.jpg';

var rowHeight ={
  height: 300,
}

var foodPic = {
  backgroundImage: `url(${food})`,
  backgroundSize: 'cover',
  width:350,
  height:400,
  
}


var description = {
  maxWidth: 250,
  marginTop: 10
  
}

var title = {
   color: 'yellow'
  
}

class Menu extends Component {
    constructor(props) {
        super(props);  
    this.state={
      selectedDish: null
    };
       
    }  
    
    onDishSelect(dish){
      this.setState({selectedDish: dish});
     
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

      const handleClickScroll = () => {
        const element = document.getElementById('dish');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id}  className="col-12 col-md-5 m-1" >
                  <Card key={dish.id} className='rounded-4' >
                  <Card.Img width="100%" src={dish.image} alt={dish.name} className='rounded-4'  />
                  <Card.Body>
                      <Card.Title>{dish.name}</Card.Title>
                      <Card.Text>   {dish.description}   </Card.Text>
        <Button variant="primary"  onClick={()=> {this.onDishSelect(dish) ; handleClickScroll()}}> select this dish </Button>
      </Card.Body>
                  
                </Card>
              </div>
            );
        });

        return (
         <>
          <div className="container-fluid bg-dark">
          <div className="row d-flex  pt-2 text-info ps-md-5 ps-0 bg-secondary " style={rowHeight}>
            <div className='col-12 col-md-5 m-2  me-md-5 d-md-block d-flex flex-column justify-content-center ' >
              <div className='d-flex  justify-content-md-start ms-5 ps-5  '>
              <h1 className='mb-0' style={title}>Little Lemon</h1>
              </div>
              <div className='d-flex justify-content-center ms-5 ps-5  ' style={description}>
              <p className='fs-5.5 text-dark '>we are a family owned mediteranean restaurant foucused on traditional recipes served with a modern twist...</p>
              </div>
            </div>
            <div className='col-12 col-md-6 d-none d-md-inline  m-2  ms-5  rounded-4' style={foodPic}>
            </div>

            </div>

            <div className='row ps-md-5 ms-md-5 mt-md-5 text-light pt-md-5 pb-md-3 '>
              <div className='col-12'>
           <h2 className=' d-flex justify-content-center d-md-block m-3'>This week's Specials!</h2>
           </div>
            </div>
            <div className="row d-flex align-item-center justify-content-center ">
            
                  {menu}
            </div>
          <div className="row d-flex align-item-center justify-content-center bg-secondary pt-3" id='dish'>
          {this.renderDish(this.state.selectedDish)}
          </div>




            </div>

        
        
     
  
        </>
        );
    }
  }

export default Menu;
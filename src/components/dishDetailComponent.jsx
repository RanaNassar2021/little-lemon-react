import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

class DishDetails extends Component{
   
    renderComments(){
      const {comments} = this.props.selectedDish;
      return(
        <div className='col-12 col-md-12 m-1'>
          <Card className='bg-dark text-light mt-0 p-2'>
            {comments.map(comment =>(
              <ul className='list-unstyled'>
                <li key={comment.comment}>
                  {comment.comment}
                </li>
                  <li key={comment.author}>
                {comment.author}, {comment.date}

              </li>
              </ul>
           
            ))}
          </Card>
        </div>
      )
      } 
    

  render(){
    
    return(
      <>
     
        <div className='col-12 col-md-5 m-1' >
          <h4 className='d-inline me-2 '>Dish details</h4>
          <i class="fas fa-utensils fa-2x"></i>
    <Card className='bg-dark text-light'>
      <Card.Img width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name}/>
      <Card.Body>
        <Card.Title>{this.props.selectedDish.name}
        </Card.Title>
        <Card.Text>{this.props.selectedDish.description}</Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='col-12 col-md-5 m-1'>
   <h4 className='d-inline me-2'>Comments</h4>
   <i class="fas fa-comment-dots fa-2x"></i>
   <div>
    {this.renderComments()}
   </div>
    
    </div>
    </>
 ) }
}

export default DishDetails;
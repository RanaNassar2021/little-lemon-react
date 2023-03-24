import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

class DishDetails extends Component{
   
    renderComments(){
      const {comments} = this.props.selectedDish;
      return(
        <div className='col-12 col-md-12 m-1'>
          <Card className='bg-light mt-0 p-2'>
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
      <div >
      <div className='row'>
        <div className='col-12 col-md-5 m-1' >
    <Card >
      <Card.Img width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name}/>
      <Card.Body>
        <Card.Title>{this.props.selectedDish.name}
        </Card.Title>
        <Card.Text>{this.props.selectedDish.description}</Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='col-12 col-md-5 m-1'>
   <h4>Comments</h4>
   <div>
    {this.renderComments()}
   </div>
    
    </div>
    </div>
    </div>
 ) }
}

export default DishDetails;
import React, {Component} from 'react';
import {Card, CardGroup, Table} from "react-bootstrap";
import RenderLeader from './LeaderComponent';
class About extends Component{
  
    render(){
        return(
          <div className='container bg-dark fluid'>
            <div className='row text-light ps-2 ps-sm-5 ms-2 ms-sm-5 '>
              <h2 className=' mt-4'>Restaurant ConFusion </h2>  
           <p className=' mb-5 '>We take inspiration from the world's best cuisines, <br />
            and create a unique fusion experience. Our lipsmacking <br />
            creations will tickle your senses.</p>               
            </div>

            <div className='row bg-light ps-5 pt-2 '>
             <h4 className='ms-5'>About Us</h4>
            </div>
            <div className='row'>
              <div className='bg-light'>
                <CardGroup className='mx-4 '>
                <Card className='m-4'>
                  <Card.Body>
                    <Card.Title>
                     <h3>Our History</h3> </Card.Title>
                     <Card.Text>Started in 2010, Restaurant ConFusion quickly established itself
                      as a culinary icon par excellence in Hong Kong. with its unique brand of world
                      fusion cuisine that can be found nowhere else, it enjoys patronage from 
                      A-list clientele in Hong Kong. Featuring four of the best three-star Michelin 
                      chefs in the world, you never know what will arrive on your plate the next time you
                      visit us. <br />
                      The restaurant traces its humble beginnings to The Frying Pan, a successful chain started 
                      by our CEO, Mr. Peter Pan, that featured for the first time the worlds's best cuisines in a 
                      pan.
                     </Card.Text>
                  </Card.Body>
                 </Card>
                 <Card className='m-4'> 
                  <Card.Body>
                    <Card.Title  className='bg-primary text-light p-2'> Facts At a Glance </Card.Title>
                    <Table>
                      <tr>
                        <th>Started</th>
                        <td>3 Feb, 2019</td>
                      </tr>
                      <tr>
                        <th>Major Stake Holder</th>
                        <td>HK fine foods Inc.</td>
                      </tr>
                      <tr>
                        <th>Last Year's Turnover</th>
                        <td>$1,250,375</td>
                      </tr>
                      <tr>
                        <th>Employes</th>
                        <td>40</td>
                      </tr>
                      
                    </Table>
                  </Card.Body>
                 </Card>
                </CardGroup>

                <Card className='mx-5'>
                  <Card.Title className='mt-3 ms-3 mb-0'>You better cut the pizza in four pieces because i'm not hungry 
                    enough to eat six.
                  </Card.Title>
                  <Card.Body >
                    <Card.Text>-Yogi Berra, The wit and wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014</Card.Text>
                  </Card.Body>
                </Card>
   
                  <RenderLeader/>
                
                
                 
              
              </div>

            </div>

          </div>
        )
    }
}
export default About;
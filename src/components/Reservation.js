
import place from '../shared/restaurant.jpg';
import pic1 from '../shared/restaurants.jpg';
import pic2 from '../shared/chef.jpg';
import pic3 from '../shared/food.jpg';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import ReservationForm from './reservationForm';

var sectionStyle = {
    backgroundImage: `url(${place})`
 }
 var sectionStyle1 = {
    backgroundSize: 'cover',
    width:200,
    height:200,
    backgroundImage: `url(${pic1})`,
    
 }
 var sectionStyle2 = {
    backgroundSize: 'cover',
    width:200,
    height:200,
    backgroundImage: `url(${pic2})`,
    
 }
 var sectionStyle3 = {
    backgroundSize: 'cover',
    width:200,
    height:200,
    backgroundImage: `url(${pic3})`,
    
 }

function Reservation (){

  const [form,setForm] = useState(false)
   function handleReservation (){
    setForm(true);
   }
    return(
     <>
     <div className="container-fluid bg-secondary" id='font-link'>
        <div className="row d-flex align-item-center justify-content-center pt-4 text-info" style={sectionStyle}>
         <h2 >Reservation</h2>
         
         <div className="col-12 col-md-5 m-2 p-4 square border border-light rounded-4 " >
               <h4> Indoor seating</h4>
               <span className='text-warning' ><i class="fa-solid fa-calendar-days fa-2x"></i></span>

               <p className='fs-4 d-inline ms-2'>Date</p>
                <div className="d-grid gap-2 mb-3 text-dark">
                <select className='rounded-4 fs-5 p-2 '>

         <option>
         select date</option>

     <option>2/4/2023</option>

    <option>4/4/2023</option>

      </select>
    
    </div>

   <span className='text-warning' ><i class="fa-solid fa-champagne-glasses fa-2x"></i>
   </span>
  
   <p className='m-2 fs-4 mb-1 d-inline'>Occasion</p>
                <div className="d-grid gap-2 text-dark">
                <select className='rounded-4 fs-5 p-2 '>
               <option >
                    select occasion</option>

                <option >Engagement</option>

               <option>Birthday</option>

                 </select>
   </div>

         </div>
         <div className="col-12 col-md-5 m-2 square border rounded-4 p-4">
         <h4> Outdoor seating</h4>
               <span className='text-warning' ><i class="fa-solid fa-person fa-2x"></i> <i class="fa-solid fa-person fa-2x"></i></span>

               <p className='fs-4 d-inline ms-2'>Number of Diners</p>
                <div className="d-grid gap-2 mb-3 text-dark ">
                <select className='rounded-4 fs-5 p-2 '>

         <option>
         No. of Diners</option>

     <option >2 people</option>

    <option>4 people</option>

      </select>
    
    </div>

   <span className='text-warning' ><i class="fa-solid fa-clock fa-2x"></i>
   </span>
  
   <p className='mt-1 fs-4 mb-1 d-inline ms-2'>Time</p>
                <div className="d-grid gap-2 text-dark">
                <select className='rounded-4 fs-5 p-2 '>
               <option>
                    select Time</option>

                <option >6:00 PM</option>

               <option>8:00 PM</option>

                 </select>
   </div>
         </div>
        </div>
        <div className='row'>
        {form===false?<div></div>:<ReservationForm/>}
        </div>

        <div className="row d-flex align-item-center justify-content-center pt-2 text-info bg-light">
            <div className='col-12 col-md-3 bg-dark m-2 rounded-4' style={sectionStyle1}>
  
            </div>
            <div className='col-12 col-md-3 bg-dark  m-2 rounded-4' style={sectionStyle2}>
  
            </div>
            <div className='col-12 col-md-3 bg-dark  m-2 rounded-4' style={sectionStyle3}>
  
            </div>
            </div>
            <div className="row d-flex align-item-center justify-content-center pt-2 text-info bg-light">
            <div className='col-8 col-md-3  m-2 mb-5 d-grid gap-2' >
       <Button className='rounded-4 fs-5'  onClick={handleReservation}>Reserve a table</Button>
            </div>
            
            </div>
           
     </div>
     </>
    )
}

export default Reservation;
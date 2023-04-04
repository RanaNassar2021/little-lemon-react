import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";

const ReservationForm = () => {
    const {values, handleChange, handleSubmit, errors, touched} = useFormik({
     initialValues: {
      firstName: '',
      lastName: '',
      email: '',
     },
     onSubmit: (values) => {
     console.log(values)
     },
      validationSchema: Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Please enter a valid email').required("Email required"),
        
      }),
     //onSubmit,
  
    });
  
    return (
      <FullScreenSection
        isDarkBackground
        backgroundColor="#264653"
        spacing={4}
  
      >
        <VStack p={1} alignItems="flex-start" id="form">
          <Heading as="h1" id="contactme-section">
            Reservation details
          </Heading>
          <Box p={1} rounded="md" w="100%">
            <form onSubmit={handleSubmit} >
              <VStack spacing={4}> 
                <FormControl >
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Input value={values.firstName} onChange={handleChange}
                    className={errors.firstName && touched.firstName?"input-error":""}
                    id="firstName"
                    name="firstName"
                  />
                  {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <FormControl >
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Input value={values.lastName} onChange={handleChange}
                    className={errors.lastName && touched.lastName?"input-error":""}
                    id="lastName"
                    name="lastName"
                  />
                  {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <FormControl >
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input value={values.email} onChange={handleChange}
                    className={errors.email && touched.email ?"input-error":""}
                    id="email"
                    name="email"
                    type="email"
                  />
                  {errors.email&& touched.email && <p className="error">{errors.email}</p>}
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
              
                <FormControl >
                  <FormLabel htmlFor="comment">Special Requests:</FormLabel>
                  <Textarea
                    id="comment"
                    name="comment"
                    height={250}
                  />
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="yellow" width="full"
                 onClick={()=>{
                  if (errors.firstName==null && errors.comment==null&& errors.email==null){
                    Swal.fire({
                      icon: 'success',
                      title: 'All good..',
                      text: 'your Reservation has been confirmed , kindly check your email :)',
                  })
                  } else{
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Something went wrong!, please fill all the required fields',
  
                  })
                  }
                }}>
                  confirm Reservation
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </FullScreenSection>
    );
  };
  
  export default ReservationForm;
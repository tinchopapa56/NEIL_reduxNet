import { Button, ButtonGroup, Container, Typography } from '@mui/material'
import React from 'react'
import API from '../../app/axios/api_agent'
 
 const About = () => {
   return (
     <Container>
        <Typography variant="h2">Errors for testing</Typography>

        <ButtonGroup fullWidth>
          <Button variant="contained" onClick={() => API.TestErrors.get400Error()}>Test 400 Error</Button>
          <Button variant="contained" onClick={() => API.TestErrors.get401Error()}>Test 401 Error</Button>
          <Button variant="contained" onClick={() => API.TestErrors.get404Error()}>Test 404 Error</Button>
          <Button variant="contained" onClick={() => API.TestErrors.get500Error()}>Test 500 Error</Button>
          <Button variant="contained" onClick={() => API.TestErrors.getValidationError()}>Test ValidationError</Button>
        </ButtonGroup>

     </Container>
   )
 }
 
 export default About
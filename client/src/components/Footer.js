import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

function Footer() {
  return (
    <footer>
          <Box bgcolor="text.secondary" color="white">
              <Container maxWidth='lg' >
                  <Grid container spacing ={5}  >
                  <Grid item xs={12} sm={4}>
                  <Box borderBottom={1} > About us</Box>
                  <Box > 
                      
                            
                  </Box>
                    </Grid>
                      <Grid item xs={12} sm={4}>
                          <Box borderBottom={1} >Contact us</Box>
                          <Box > 
                            <Link href="/" color="inherit">+21654509179</Link> 
                          </Box>
                          <Box > 
                            <Link href="/" color="inherit" >commercial@gpro-consulting.com</Link> 
                          </Box>
                          <Box > 
                            <Link href="/" color="inherit">gpro-consulting.com</Link> 
                          </Box>

                      </Grid>
                      
                      <Grid item xs={12} sm={4}>
                          <Box borderBottom={1} >Quick Links</Box>
                          <Box> 
                            <Link href="/" color="inherit">services</Link> 
                          </Box>
                          <Box> 
                            <Link href="/" color="inherit">Product</Link> 
                          </Box>
                          

                      </Grid>
                  </Grid>

                  <Box  textAlign="center" pt={{xs: 5,sm: 10}} pb={{xs: 5,sm: 0}}>
                             Gpro consulting &reg; {new Date().getFullYear()}
                             </Box>
              </Container>
          </Box>
       
       
      </footer>
  )
}

export default Footer
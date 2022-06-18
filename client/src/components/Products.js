import {React,useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Reclamation from "./Reclamation"
import axios from "axios";

const useStyles = makeStyles((theme) => ({
 
  Container: {
    paddingTop: theme.spacing(3)
  },
  Title: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
  
  
}));


function Products() {
  const classes = useStyles();
  
  const [Products, setProducts] = useState([]);

   const fetchProducts = () => {
    const res = axios.get("http://localhost:3000/fetchProducts").then((res) => {
      setProducts(res.data);
    });
  };
  
  //useffect : only render when the user open the page where the function is used  
  useEffect(() => {
    fetchProducts();
  });
  return (
    <div>
    <Container maxWidth="lg" className={classes.Container}>
    <Typography variant="h4" className={classes.Title}>
      Articles
    </Typography>
    <Grid container spacing={3}>
    { Products.map((product) => (
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={product.picture}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            
            <Box>
              <BookmarkBorderIcon />
            </Box>
            <Box>
              <Reclamation productId={product._id}/>
            </Box>
          </CardActions>
        </Card>
      </Grid>
    ))}
      
           
         
          </Grid>
          
      </Container>
      </div>
  )
}

export default Products
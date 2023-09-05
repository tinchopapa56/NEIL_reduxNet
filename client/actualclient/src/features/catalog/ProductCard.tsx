import { Avatar,  Card, CardContent, CardHeader, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { IProduct } from '../../app/interfaces';

type Props = {
    product: IProduct;
}

export default function ProductCard({product}: Props) {
  return (
    <Card>
      <CardHeader 
        avatar={
          <Avatar>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
      />
      <CardMedia 
        sx={{ height: 140, backgroundSize: 'contain', bgcolor: "primary.light" }}
        image={product.imgUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5" component="div">
          {product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>

      <CardActions>
          <Button size="small">Add to cart</Button>
          <Button size="small">View</Button>
      </CardActions>
    </Card>
  )
}
import { Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import API from '../../app/axios/api_agent'
import { useParams } from 'react-router-dom'
import { IProduct } from '../../app/interfaces'
 
 const ProductDetails = () => {

  const {id} = useParams<{id: string}>();
  const [product, setProduct] = useState<IProduct | null>(null)

  useEffect(() => {
    id && API.Catalog.details( parseInt(id) )
    .then(product => setProduct(product))
    .catch(err => console.log(err))
  }, [id])
  


   return (
     
     <Container>
        <Typography variant="h2"> ¨Product detail </Typography>
        {<p>{product && product.name}</p>}
     </Container>
   )
 }
 
 export default ProductDetails
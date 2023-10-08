import { Divider, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import API from '../../app/axios/api_agent'
import { useParams } from 'react-router-dom'
import { IProduct } from '../../app/interfaces'
import { Table_Mia } from './TableMIA'
import Loading from '../../app/errors/Loading'
import ServerError from '../../app/errors/NotFound'
 
 const ProductDetails = () => {

  const {id} = useParams<{id: string}>();
  const [product, setProduct] = useState<IProduct | null>(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    id && API.Catalog.details( parseInt(id) )
    .then(product => setProduct(product))
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
  }, [id])
  
  if(loading) return <Loading />
  if(!product) return <ServerError item_not_found="Product" />

  return (
     <Grid container spacing={6}>
        <Grid item xs={6}>
          <img src={product.imgUrl} alt={product.name} style={{width: '100%'}} />
        </Grid>
        <Grid item xs={6}>
          <h3>{product.name}</h3>
          <Divider sx={{ mb: 2}} />
          <h4>${(product.price / 100).toFixed(2) }</h4>

          <Table_Mia product={product} />
          
        </Grid>
     </Grid>
   )
 }
 
 export default ProductDetails
import { Grid } from '@mui/material'
import { IProduct } from '../../app/interfaces'
import ProductCard from './ProductCard'

type Props = {
    products: IProduct[]
}

export default function ProductList({products}: Props) {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
      {products.map(p => (
        <Grid item xs={2} sm={4} md={4} key={p.ID}>
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
  )
}
import { TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material'
import React from 'react'
import { IProduct } from '../../app/interfaces'

type IProps = {
    product: IProduct
}

function Table_Mia({product}: IProps) {
  return (
    <TableContainer>
            <Table>
              <TableBody>
                {Object.keys(product).map((item) => (
                    <Table_Row key={item} tag={item} data={product[item]} />
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

type IPropsRow = {
    tag: string
    data: any
}

function Table_Row({tag, data}: IPropsRow) {
    return (
    <TableRow>
        <TableCell>{tag}</TableCell>
        <TableCell>{data}</TableCell>
    </TableRow>
    )
}


export {
    Table_Mia,
}
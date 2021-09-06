import React from "react";
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
    {
        id: 1,
        name: 'Shoes',
        description: 'Running Shoes',
        price: '$500',
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f9b52c1f-ca36-4492-8836-7a84c6bfd789/quest-3-mens-running-shoes-FHR8DM.png'
    },
    {
        id: 2,
        name: 'Macbook',
        description: 'Apple Macbook',
        price: '$200',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1603332211000'
    }
]

const Products = () => {
    const classes = useStyles();

    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>

)}

export default Products;
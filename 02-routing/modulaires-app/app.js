const express = require('express');
const app = express();

const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.listen(3003, () => console.log('Modular app: http://localhost:3003'));

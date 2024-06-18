const express = require('express');
const cors = require('cors');
const fundraiserRoutes = require('./src/fundraiser/routes')
const app = express();
const port = 7000;







app.get('/', (req, res) => {
    res.send('Hello World');
})
//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/api/v1/fundraisers', fundraiserRoutes)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
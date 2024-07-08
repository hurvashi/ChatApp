const express = require('express')
require('dotenv').config();
const connectDB = require('./db/connect')
const auth = require('./routes/auth')
const cors = require('cors')



const app = express();

app.use(express.json());
app.use(cors())
app.use('/api/v1/auth',auth)



const port = process.env.PORT || 5000


const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        
        app.listen(port,()=>{
            console.log(`Server listening at port ${port}`)
        })  
    } catch (error) {
        console.log('ERROR')
    }
}

start()
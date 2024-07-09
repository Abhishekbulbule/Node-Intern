import express from 'express';
import 'dotenv/config'
import connection from './Model.js'

const localport = process.env.PORT;
const app = express();
app.use(express.json());

const argCheck = (req, res,next)=>{
    const {prId, custOrgId} = req.body;
    if(prId == null|undefined ||custOrgId == null | undefined){
        return res.json({
            status:404,
            message: "Request Method does not contains arguments!!"
        })
    }
    next();
}

// /api/getVendorUsers
// prId and custOrgId.
app.get('/api/getVendorUsers',argCheck, (req, res)=>{
    const {prId, custOrgId} = req.body;
    const query = 'select * from PrLineItems'; 
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(404).json({
                message : "Some error Occured!!"
            })
        }
        console.log('User data:', results);
        return res.json(results);
    });
})


app.listen(localport,()=>{
    console.log('Server running at port 8080');
})
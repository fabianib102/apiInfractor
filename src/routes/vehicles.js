const { Router } = require('express');
const router = Router();
const dataVehicle = require('../routes/sample.json');

router.get('/',(req,res)=>{
    res.send(dataVehicle);
})


module.exports = router;
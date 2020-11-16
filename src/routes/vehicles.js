const { Router } = require('express');
const router = Router();
const dataVehicle = require('../routes/sample.json');

router.get('/',(req,res)=>{
    res.send(dataVehicle);
})

router.get('/:dominio',(req,res)=>{
    const resp = {
        "resp": false,
        "result": []
    }
    const dominio = req.params.dominio;
    let result = dataVehicle.filter(v => v.dominio == dominio);

    if(result.length > 0){
        resp.resp = true;
        resp.result = result
    }

    res.send(resp);
})


module.exports = router;
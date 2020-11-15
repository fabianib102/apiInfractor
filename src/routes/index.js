const { Router } = require('express');
const router = Router();


router.get('/',(req,res)=>{
    res.send({
        "Title": "Test del title"
    });
})


module.exports = router;
const express = require('express');
const api = express();

const PORT = process.env.PORT || 8877;

api.get('/',(req,res)=>{
    res.json({
        msg:'OK'
    })


})

api.get('/ABOUT',(req,res)=>{
    
    res.json({
        name:'JUNIO',
        urls:[
        {
            type:'GITHUB',
            url:'https://github.com/Welington156'
        }]
    })

})


api.listen(PORT, () =>{
console.log('Home'+PORT);
})
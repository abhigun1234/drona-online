const express =require('express');
const app=express()
const path =require('path')
app.use(express.static('./dist/dronaonline'))
app.listen(process.env.PORT || 8000)
//pathlocation stretigy
app.get('/*',function(req,res) {
res.sendFile(path.join(__dirname +'/dist/dronaonline/index.html'))
})
console.log('console listening !')
const express=require('express');
const app=express()
const path=require('path')
app.use(express.static(__dirname + '/dist/dronaonline'))
app.listen(process.env.PORT || 8080);

//pathLocationStrategy
app.get('/*',function(req,res)
{
    //const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(path.join(__dirname + '/dist/dronaonline/index.html'))
    //res.sendFile(index);
})
console.log('hello')
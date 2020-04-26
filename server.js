const express=require('express');
const app=express()
const path=require('path')
app.use(express.static('./dist/dronaonline'))
app.listen(process.env.PORT || 8080);
//https://www.youtube.com/watch?v=0bOJjAUXjhI&t=262s
//pathLocationStrategy
//https://dronaonlineadmin.herokuapp.com/courses/
app.get('/*',function(req,res)
{
    //https://dronaonline.herokuapp.com/
    res.sendFile(path.join(__dirname + '/dist/dronaonline/index.html'))
})
console.log('hello')
//url for drona onliness
//https://github.com/abhigun1234/drona-online.git
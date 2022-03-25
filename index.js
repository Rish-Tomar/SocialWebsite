const express= require('express')
const app= express()
const port =8000

//use express router
app.use('/',require('./Routes'))



app.listen(port, function(err){
    if(err){
        console.log(`Error : ${err}`)
        return;
    }
    
    console.log(`Server is running on port : ${port}`)
})
let express = require('express')
let app = express()
let port = process.env.PORT || 8000

app.use('view-engine','ejs')

//homepage to submit profile
app.get('/', function(req,res,next){
  res.render('home.ejs')
})

app.listen(port, function(){
  console.log("listening on", port)
})

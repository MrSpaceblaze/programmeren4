var express = require('express');
var app = express();
app.get('/', function(request, response) {
response.send('Hello Avans!');
})
app.get('/about', function(request, response) {
response.send('Written by <jouw naam hier invullen>');
})
app.post('/', function(request, response) {
response.send('Hello Avans, POST request received!');
})
app.put('/', function(request, response) {
response.send('Hello Avans, PUT request received!');
})
app.get('/json', function(request, response){
    switch(getRandom(5)){
    case 0: response.json({
        'gender':'female',
        'name':[{
            'title':'ms',
            'first':'بیتا',
            'last':'نجاتی'
        }],
        'location':[{
            'street':'9061 شورا',
            'city':'',
            'state':'',
            'postcode':''
        }],
        'email':'',
        'login':[{
            'username':'tinygoose201'
        }]
    })
        break
    case 1: response.json({
        'name':'Banana'
    })
        break;
    case 2: response.json({
        'name':'Joe'
    })
        break;
    case 3: response.json({
        'name':'Carl'
    })
        break;
    case 4: response.json({
        'name':'Dan'
    })
        break;
    }
}),
app.all('*',function(request,response){
    response.status(404)
    response.send('404 - not found')
}),
app.listen(process.env.PORT, function() {
console.log('Server app is listening on port '+process.env.PORT);
})
function getRandom(max){
    return Math.floor(Math.random()*Math.floor(max));
}
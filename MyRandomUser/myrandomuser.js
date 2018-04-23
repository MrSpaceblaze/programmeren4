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
        'results':[{
        'gender':'male',
        'name':{
            'title':'mr',
            'first':'louis',
            'last':'petit'
        },
        'location':{
            'street':"6147 place de l'abbé-basset",
            'city':'dijon',
            'state':'yvellines',
            'postcode':57229
        },
        'email':'louis.petit@example.com',
        'login':{
            'username':'whitewolf351',
            'password':'pyramid',
            'salt':'xpCjgvu6',
            'md5':'e52bb97bf081765a0f6328ece3172e4a',
            'sha1':'8f9a876137ca7602b3b4625cdafe5d571fe06e1a',
            'sha256':'943f5f1c4edbe018af42f10a51c2295af3321300004557ba69cd2820763fcafd'
        },
        'dob':'1976-07-12 12:59:26',
        'registered':'2008-02-24 02:24:40',
        'phone':'04-96-26-63-91',
        'cell':'06-20-84-16-69',
        'id':{
            'name':'INSEE',
            'value':'176697649479 16'
        },
        'picture':{
            'large':	"https://randomuser.me/api/portraits/men/3.jpg",
            'medium':	"https://randomuser.me/api/portraits/med/men/3.jpg",
            'thumbnail': 	"https://randomuser.me/ap…ortraits/thumb/men/3.jpg"
        },
        'nat':'FR'
    }]})
        break
    case 1: response.json({
        'results':[{         
        'gender':'male',         
        'name':{             
            'title':'mr',             
            'first':'benjamin',             
            'last':'slawa'         
        },         
        'location':{             
            'street':'5382 park rd',             
            'city':'clinton',             
            'state':'nova scotta',             
            'postcode':46460         
        },         
        'email':'benjamin.slawa@example.com',         
        'login':{             
            'username':'goldenpanda920',             
            'password':'gordo',
            'salt':'L55sAsXO',             
            'md5':'8b1ca567b5d325b9fd46cf28443dc653',             
            'sha1':'0d896bae14e97642bd751743c3cd8c8674a97fb2',             
            'sha256':'8bb3322b3ed2b62dc1289d1f506d49fd333204fabd0169418c3f124dacb8e1d2'         
        },         
        'dob':'1961-06-22 00:40:08',         
        'registered':'2007-06-20 13:19:42',         
        'phone':'077-145-9672',         
        'cell':'494-890-6980',         
        'id':{             
            'name':'',             
            'value':null         
        },         
        'picture':{             
            'large':'https://randomuser.me/api/portraits/men/61.jpg',             
            'medium':'https://randomuser.me/api/portraits/med/men/61.jpg',             
            'thumbnail':'https://randomuser.me/api/portraits/thumb/men/61.jpg'         
        },         
    'nat':'CA'}]})
        break;
    case 2: response.json({
        'results':[{
        'gender':'male',
        'name':{
            'title':'mr',
            'first':'vincent',
            'last':'johnson'
        },
        'location':{
            'street':'6833 cavendish drive',
            'city':'palmerston north',
            'state':'tasman',
            'postcode':85511
        },
        'email':'vincent.johnson@example.com',
        'login':{
            'username':'ticklishlion662',
            'password':'carolina',
            'salt':'b72wU6uM',
            'md5':'77a0bf74f5eb7c2f067cbc6fd289d8f0',
            'sha1':'242057ce79aaf965d3ef6f7da6631d1520076c0a',
            'sha256':'62745635d1f18a26a34f3e627b87bbd16c5a081b19b4be281d6ad0ce52b6eea1'
        },
        'dob':'1984-10-04 14:28:46',
        'registered':'2014-01-27 13:58:32',
        'phone':'(306)-280-3497',
        'cell':'(312)-469-9064',
        'id':{
            'name':'',
            'value':null
        },
        'picture':{
            'large':'https://randomuser.me/api/portraits/men/3.jpg',
            'medium':'https://randomuser.me/api/portraits/med/men/3.jpg',
            'thumbnail':'https://randomuser.me/api/portraits/thumb/men/3.jpg'
        },
        'nat':'NZ'
    }]})
        break;
    case 3: response.json({
        'results':[{
        'gender':'male',
        'name':{
            'title':'mr',
            'first':'michael',
            'last':'mertens'
        },
        'location':{
            'street':'3951 gartenweg',
            'city':'erfurt',
            'state':'saarland',
            'postcode':37882
        },
        'email':'michael.martens@example.com',
        'login':{
            'username':'beautifulmeerkat535',
            'password':'bowtie',
            'salt':'DT8TqCHb',
            'md5':'fabf15d6f48299c0c213687387f274da',
            'sha1':'cb782249f4bd53addf6b43c0a53a080f54f3d3d5',
            'sha256':'73c8f4eea5b6faad7bf9d63e7a1c8d4591ffb577426e3142928128203ef6e8e2'
        },
        'dob':'1960-03-29 11:41:39',
        'registered':'2011-10-05 13:40:23',
        'phone':'0062-3182957',
        'cell':'0173-8867738',
        'id':{
            'name':'',
            'value':null
        },
        'picture':{
            'large':'https://randomuser.me/api/portraits/men/36.jpg',
            'medium':'https://randomuser.me/api/portraits/med/men/36.jpg',
            'thumbnail':'https://randomuser.me/api/portraits/thumb/men/36.jpg'
        },
        'nat':'DE'
    }]})
        break;
    case 4: ({
        'results':[{
        'gender':'male',
        'name':{
            'title':'mr',
            'first':'hunter',
            'last':'mackay'
        },
        'location':{
            'street':'5695 parliament st',
            'city':'lumsden',
            'state':'ontario',
            'postcode':1534
        },
        'email':'hunter.mackay@example.com',
        'login':{
            'username':'purplewolf555',
            'password':'1226',
            'salt':'OKQfB6RS',
            'md5':'09414f0d870dd458d8157478a8e1d20e',
            'sha1':'0f66877aecb4b2a5028bce71021cba7b78d58e1d',
            'sha256':'82d7a9c18153ae6066825789c6ff7e8d909c558b2525229c25a5516b5e45102e'
        },
        'dob':'1956-07-04 08:51:51',
        'registered':'2012-07-30 17:24:27',
        'phone':'284-775-3628',
        'cell':'701-676-6904',
        'id':{
            'name':'',
            'value':null
        },
        'picture':{
            'large':'https://randomuser.me/api/portraits/men/50.jpg',
            'medium':'https://randomuser.me/api/portraits/med/men/50.jpg',
            'thumbnail':'https://randomuser.me/api/portraits/thumb/men/50.jpg'
        },
        'nat':'CA'
    }]})
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
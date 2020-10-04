var topbar = document.createElement('div');
topbar.setAttribute('class','topbar');
topbar.id='myTopBar';
var a1 = document.createElement('a');
a1.id = 'home';
a1.setAttribute('onclick', 'getStarted("home")');
a1.setAttribute('href', '#');
a1.innerHTML = 'HOME'
var a2 = document.createElement('a');
a2.id = 'world';
a2.setAttribute('onclick', 'getStarted("world")');
a2.setAttribute('href', '#');
a2.innerHTML = 'WORLD';
var a3 = document.createElement('a');
a3.id = 'politics';
a3.setAttribute('onclick', 'getStarted("politics")');
a3.setAttribute('href', '#');
a3.innerHTML = 'POLITICS';
var a4 = document.createElement('a');
a4.id = 'magazine';
a4.setAttribute('onclick', 'getStarted("magazine")');
a4.setAttribute('href', '#');
a4.innerHTML = 'MAGAZINE';
var a5 = document.createElement('a');
a5.id = 'technology';
a5.setAttribute('onclick', 'getStarted("technology")');
a5.setAttribute('href', '#');
a5.innerHTML = 'TECHNOLOGY';
var a6 = document.createElement('a');
a6.id = 'science';
a6.setAttribute('onclick', 'getStarted("science")');
a6.setAttribute('href', '#');
a6.innerHTML = 'SCIENCE';
var a7 = document.createElement('a');
a7.id = 'health';
a7.setAttribute('onclick', 'getStarted("health")');
a7.setAttribute('href', '#');
a7.innerHTML = 'HEALTH';
var a8 = document.createElement('a');
a8.id = 'sports';
a8.setAttribute('onclick', 'getStarted("sports")');
a8.setAttribute('href', '#');
a8.innerHTML = 'SPORTS';
var a9 = document.createElement('a');
a9.id = 'arts';
a9.setAttribute('onclick', 'getStarted("arts")');
a9.setAttribute('href', '#');
a9.innerHTML = 'ARTS';
var a10 = document.createElement('a');
a10.id = 'fashion';
a10.setAttribute('onclick', 'getStarted("fashion")');
a10.setAttribute('href', '#');
a10.innerHTML = 'FASHION';
var a11 = document.createElement('a');
a11.id = 'food';
a11.setAttribute('onclick', 'getStarted("food")');
a11.setAttribute('href', '#');
a11.innerHTML = 'FOOD';
var a12 = document.createElement('a');
a12.id = 'travel';
a12.setAttribute('onclick', 'getStarted("travel")');
a12.setAttribute('href', '#');
a12.innerHTML = 'TRAVEL';
var icon=document.createElement('a');
icon.setAttribute('class','icon');
icon.setAttribute('href','javascript:void(0);');
icon.setAttribute('onclick','myfunc()');
var i=document.createElement('i');
i.setAttribute('class','fa fa-bars');

document.body.append(topbar);
topbar.append(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, icon);
icon.append(i);


async function getStarted(id) {
    document.getElementById('content').innerHTML = '';
    var response = await fetch('https://api.nytimes.com/svc/topstories/v2/' + id + '.json?api-key=JEvDvckARWaFARSG7Ahl0m5cqj6RDSGO')
    var data = await response.json();
    var row = document.createElement('div');
    row.setAttribute('class', 'row row-cols-1 row-cols-md-1');
    for (var i = 0; i < data.num_results; i++) {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var card=document.createElement('div');
        card.setAttribute('class','card');
        var row1=document.createElement('div');
        row1.setAttribute('class','row row-cols-1 row-cols-md-1');
        var cardBody=document.createElement('div');
        cardBody.setAttribute('class','card-body col-md-8');
        var cardTitle=document.createElement('h5');
        cardTitle.setAttribute('class','card-title');
        cardTitle.innerHTML=data.results[i].section.toUpperCase();
        var cardText1=document.createElement('p');
        cardText1.setAttribute('class','card-text');
        cardText1.innerHTML=data.results[i].title;
        var cardDate=document.createElement('p');
        cardDate.setAttribute('class','card-text');
        var date=new Date(data.results[i].created_date);
        cardDate.innerHTML=months[date.getMonth()]+' '+date.getFullYear();
        var cardAbstract=document.createElement('p');
        cardAbstract.setAttribute('class','card-text');
        cardAbstract.innerHTML=data.results[i].abstract;
        var continueReading=document.createElement('a');
        continueReading.setAttribute('href',data.results[i].url);
        continueReading.setAttribute('target','_blank');
        continueReading.innerHTML='Continue Reading';
        var image_div=document.createElement('div');
        image_div.setAttribute('class','col-md-4');
        var image=document.createElement('img');
        image.setAttribute('src',data.results[i].multimedia[4].url);
        image.setAttribute('class','card-img img-thumbnail');
        
        
        image_div.append(image);
        cardBody.append(cardTitle,cardText1,cardDate,cardAbstract,continueReading);
        row1.append(cardBody,image_div)
        card.append(row1);
        row.append(card);
        document.getElementById('content').append(row);
    }
}


function myfunc() {
    var element=document.getElementById('myTopBar');
    if(element.className ==='topbar') {
        element.className+=' responsive';
    }
    else {
        element.className='topbar';
    }
}

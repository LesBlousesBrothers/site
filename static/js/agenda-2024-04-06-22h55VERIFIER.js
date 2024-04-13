// a partir du fichier json agenda.json extraire l'array de valeurs, et comparer à une date donnée
// const myJson = "home/paul/MesSites/bbsite/static/json/agenda.json";

// async function getSuggestions(url) {
//     let response = await fetch(url);
//     return await response.json();
//   }

// const agenda = require("./agenda.json");
// const agenda = getSuggestions("/json/agenda.json")

const agenda = [
    {"date":"2024-03-21", "image":"bricole-2024-03.jpg"},
        {"date":"2024-02-21", "image":"bricole-2024-02.jpg"},
        {"date":"2024-01-21", "image":"bricole-2024-01.jpg"},
        {"date":"2024-04-21", "image":"bricole-2024-21.jpg"},
        {"date":"2024-04-03", "image":"bricole-2024-34.jpg"},
        {"date":"2024-04-02", "image":"bricole-2024-24.jpg"},
        {"date":"2024-04-04", "image":"bricole-2024-14.jpg"},
        {"date":"2024-04-09", "image":"bricole-2024-14.jpg"},
        {"date":"2024-04-06", "image":"bricole-6avril2024.jpg"}
]

console.log(agenda)

// var count = Object.keys(agenda).length;
// console.log("len de agenda : " + count)

function allDates(agenda) {
    // date du jour
    const date = new Date();
    const month = date.getUTCMonth()+1;
    const day = date.getUTCDate();      
    const year = date.getUTCFullYear();
    // console.log(typeof(year))
    let array = [];

    for (i=0; i < Object(agenda).length ; i++) {
        array.push(agenda[i].date);
    }

    return array
}

function selectDates(agenda) {
    let array = []
    const today = new Date();
    const endDay = new Date(today);
    endDay.setDate(endDay.getDate() - 1);
    const dates = allDates(agenda);
    for (i=0 ; i < dates.length ; i++) {
        let myDate = new Date(dates[i]);
        if (myDate >=  endDay) {
            array.push(myDate);
        }
    }
    return array
}

function dateToString(date) {
    // date est un string de date à transformer en yyyy-mm-dd
    var string
    const myDate = new Date(date)
    const month = ( "0" + (myDate.getMonth()+1)).slice(-2);
    const day = ("0" + myDate.getDate()).slice(-2);      
    const year = myDate.getFullYear();
    string = year + "-" + month + "-" + day;

    return string
}

function getIndex(agenda) {
    // donne un array des index des éléments de agenda.json à visualiser
    const array = [];
    const dates = selectDates(agenda);
    for (i=0 ; i < dates.length ; i++) {
        const date = dates[i];
        const stringDate = dateToString(date);
        const index = agenda.findIndex(item => item.date === stringDate)
        array.push(index)
    }

    return array
}

// console.log(allDates(agenda));
console.log(selectDates(agenda));
console.log(getIndex(agenda))

function createHTML(agenda) {
    const indexes = getIndex(agenda);

    if (indexes.length === 0) {
        let html = 
        `
        <div class="bg-pink-200 "> 
        
        <img class="w-1/2" src="/images/bricole-defaut.jpg">
        
        </div>
        
        `
        html += htmlSegment;
    } else {

    let html = "";
     indexes.forEach(index => {
        imageSrc = agenda[index].image
        let htmlSegment = 
        `
        <div class="bg-pink-200 "> 
        <p >mon index : ${index} </p>
        <img class="w-1/2" src="/images/${imageSrc}">
        
        </div>

        `
        html += htmlSegment;
       
    }); 
    }
    document.getElementById("agenda").innerHTML = html;
}



// launch script
createHTML(agenda)
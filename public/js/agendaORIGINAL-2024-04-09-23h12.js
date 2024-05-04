// a partir du fichier json agenda.json extraire l'array de valeurs, et comparer à une date donnée

async function getAgenda(url) {
let response = await fetch("/json/agenda.json");
if (response.ok) {
    // alert("le json est trouve");
    return await response.json();
} else {
    alert("HTTP Error : " + response.status)
}
}


function allDates(agenda) {
    // crée array avec toutes les dates du JSON

    // const date = new Date();
    // const month = date.getUTCMonth()+1;
    // const day = date.getUTCDate();      
    // const year = date.getUTCFullYear();

    let array = [];

    for (i=0; i < Object(agenda).length ; i++) {
        array.push(agenda[i].date);
    }

    return array
}

function selectDates(agenda) {
    // crée array avec les dates supérieures ou égales à la date du jour
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
    // date est un string de date à transformer en yyyy-mm-dd 0 inclus devant jour ou mois
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

async function createHTML() {
    // crée le html
    const agenda = await getAgenda("/json/agenda.json");

    const indexes = getIndex(agenda);
    let html = 
    `
    <div class="bg-mycolor-600 pt-4"
    
    `
    ;

    if (indexes.length == 0) {

        let htmlSegment = 
        `
        <div class=" text-center"> 
            <h2 class="text-mycolor-0">Pas d'événements prévus</h2>
            <p class="text-mycolor-0">Vous pouvez prendre connaissance de l'agenda des Blues Brothers en cliquant sur l'onglet Agenda</p>
            <img class="w-1/2 mx-auto py-4" src="/images/bricole-defaut.jpg">
            
            </div>
        
        `
        html += htmlSegment;

    } else 

    {
        indexes.forEach(index => {
            imageSrc = agenda[index].image
            let htmlSegment = 
            `
            <div class="bg-mycolor-600"> 
        
                <img class="w-1/2 mx-auto " src="/images/${imageSrc}">
                <div class="grid grid-cols-1 md:divide-y divide-red-400 py-4">

                    <div></div>
                    <div></div>

                </div>
            </div>

            `
            html += htmlSegment;
        
        }); 
    };
    
    document.getElementById("agenda").innerHTML = html;
}



// launch script
// var agenda;
// agenda = getAgenda("/json/agenda.json");
createHTML();
function createHTML() {
    let html = "";
    // indexes.forEach(index => {
        let htmlSegment = 
        `
        <div class="bg-green-200 h-32 mb-80">
        <p>VOICI DU TEXTE DE JS de agendaTest.js pas de agenda.js</p>

        </div>

        `
        

        html += htmlSegment;
    // });
    document.getElementById("agenda").innerHTML = html;
};

// launch script
createHTML()

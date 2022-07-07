const $simulateButton = document.querySelector('#simulate-button')
const $deleteButton = document.querySelector('#delete-button')

const finalTable = document.querySelector('#final-standings')

function hideButton(){ $simulateButton.className = 'hidden' }

function createDeleteButton(){ $deleteButton.className = '' }

$deleteButton.onclick = function(){
    clearPrevious()
    
    $simulateButton.className = ''
    $deleteButton.className = 'hidden'
}

$simulateButton.onclick = function(){

    const textTeams = document.querySelectorAll('.teams')
    if (textTeams.length){
        clearPrevious()
    }

    simulateLeague()
    placeTeams()
    hideButton()
    createDeleteButton()
}

function clearPrevious(){
    const textTeams = document.querySelectorAll('section')
    const hrLines = document.querySelectorAll('hr')
    const brSpaces = document.querySelectorAll('br')

    for (let i = 0; i < textTeams.length; i++){
        textTeams[i].remove()
    }
    for (let i = 0; i < hrLines.length; i++){
        hrLines[i].remove()
    }
    for (let i = 0; i < brSpaces.length; i++){
        if (brSpaces[i].className !=='initial'){
        brSpaces[i].remove()}
    }

    const texts = document.querySelectorAll('article')
    for(let i = 0; i < texts.length; i++){
        texts[i].textContent = ''
    }
}

function placeTeams(){

    let finalStandings = simulateLeague()

    for (i = 0; i < finalStandings.length; i++){
        const newDiv = document.createElement('div')
        const nextTeam = document.createElement('section')
        nextTeam.textContent = Number(i + 1) + '. ' + finalStandings[i][0] + ' - ' + finalStandings[i][1] + ' points';
        if (i === 0){
            nextTeam.id = 'winner'
        }
        else if (i === 4){
            let championsLine = document.createElement('hr')
            championsLine.className = 'championsLine'
            let brSpace = document.createElement('br')
            newDiv.appendChild(championsLine)
            newDiv.appendChild(brSpace)
        }
        else if (i === 6){
            let europaLine = document.createElement('hr')
            europaLine.className = 'europaLine'
            let brSpace = document.createElement('br')
            newDiv.appendChild(europaLine)
            newDiv.appendChild(brSpace)
        }
        else if (i === 7){
            let conferenceLine = document.createElement('hr')
            conferenceLine.className = 'conferenceLine'
            let brSpace = document.createElement('br')
            newDiv.appendChild(conferenceLine)
            newDiv.appendChild(brSpace)
        }
        else if (i === 17){
            let relegation = document.createElement('hr')
            relegation.className = 'relegation'
            let brSpace = document.createElement('br')
            newDiv.appendChild(relegation)
            newDiv.appendChild(brSpace)
        }
        finalTable.appendChild(newDiv)
        newDiv.appendChild(nextTeam)
    }

    writeInfo()
    return finalStandings;
}

function writeInfo(){

    let finalPositions = simulateLeague()

    const info = document.querySelector('#info-results');
    info.className = '';

    const leagueWinner = document.querySelector('#league-winner');
    const championsLeague = document.querySelector('#champions-league');
    const europaLeague = document.querySelector('#europa-league');
    const conferenceLeague = document.querySelector('#conference-league');
    const relegated = document.querySelector('#relegated');

    let first = finalPositions[0][0];
    let second = finalPositions[1][0];
    let third = finalPositions[2][0];
    let fourth = finalPositions[3][0];
    let fifth = finalPositions[4][0];
    let sixth = finalPositions[5][0];
    let seventh = finalPositions[6][0];
    let eighteenth = finalPositions[17][0];
    let nineteenth = finalPositions[18][0];
    let last = finalPositions[19][0];

    leagueWinner.textContent = `Winner: ${first}.`;
    championsLeague.textContent = `UEFA Champions League: ${first}, ${second}, ${third} and ${fourth}.`;
    europaLeague.textContent = `UEFA Europa League: ${fifth} and ${sixth}.`;
    conferenceLeague.textContent = `UEFA Conference League: ${seventh}.`;
    relegated.textContent = `Relegated: ${eighteenth}, ${nineteenth} and ${last}.`;

    // BUG: PARECE QUE HACE OTRA SIMULACIÓN APARTE AL LLAMAR A SIMULATE LEAGUE
    // TENGO QUE ENCONTRAR LA FORMA DE QUE USE LA MISMA SIMULACIÓN

    // APARTE: VER CÓMO IMPLEMENTAR BOOTSTRAP, ME DESORDENÓ TODO EL CSS AL PONERLO

    info.appendChild(leagueWinner);
    info.appendChild(championsLeague);
    info.appendChild(europaLeague);
    info.appendChild(conferenceLeague);
    info.appendChild(relegated);
}
/*
Restantes:
-XXXXOrdenar clubes por puntos de mayor a menor
-XXXXCrear un div para pasar resultados a texto en la página
-XXXXVer qué pasa si hay igualdad en puntos (lo definiría al azar)
-XXXXHacer algo para limpiar, que NO sea recargar la página. No que borre y vuelva a simular de una, sino que vuelva a cero: Borrar el div
-Hacer texto para campeón, copas europeas y descenso. Todo a la derecha, con bootstrap. Ejemplo:

1-Liverpool, 100                    Winner: Liverpool
2-Manchester City, 95               UEFA Champions League: Liverpool, Manchester City, Chelsea
3-Chelsea, 81                       and Arsenal
4-Arsenal, 75                       UEFA Europa League: Manchester United and Tottenham
5-Manchester United, 73             UEFA Conference League: Leicester City
6-Tottenham, 71                     Relegation: Burnley, Watford and Norwich City
7-Leicester City, 67
...
20-Norwich City, 31
*/
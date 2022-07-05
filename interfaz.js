const $simulateButton = document.querySelector('#simulate-button')
const $deleteButton = document.querySelector('#delete-button')

const finalTable = document.querySelector('#final-standings')

function destroyButton(){ $simulateButton.className = 'hidden' }

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
    destroyButton()
    createDeleteButton()
}

function clearPrevious(){
    const textTeams = document.querySelectorAll('section')
    const hrLines = document.querySelectorAll('hr')

    for (let i = 0; i < textTeams.length; i++){
        textTeams[i].remove()
    }
    for (let i = 0; i < hrLines.length; i++){
        hrLines[i].remove()
    }
}

function placeTeams(){

    let finalStandings = simulateLeague()

    for (i = 0; i < finalStandings.length; i++){
        const newDiv = document.createElement('div')
        const nextTeam = document.createElement('section')
        nextTeam.textContent = Number(i + 1) + '. ' + finalStandings[i][0] + ' - ' + finalStandings[i][1] + ' points';
        if(i === 0){
            nextTeam.id = 'winner'
        }
        else if(i === 4){
            let championsLine = document.createElement('hr')
            championsLine.className = 'championsLine'
            newDiv.appendChild(championsLine)
        }
        else if(i === 6){
            let europaLine = document.createElement('hr')
            europaLine.className = 'europaLine'
            newDiv.appendChild(europaLine)
        }
        else if(i === 7){
            let conferenceLine = document.createElement('hr')
            conferenceLine.className = 'conferenceLine'
            newDiv.appendChild(conferenceLine)
        }
        else if (i === 17){
            let relegation = document.createElement('hr')
            relegation.className = 'relegation'
            newDiv.appendChild(relegation)
        }
        finalTable.appendChild(newDiv)
        newDiv.appendChild(nextTeam)
    }
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
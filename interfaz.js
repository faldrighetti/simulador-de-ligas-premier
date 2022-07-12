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

    const textInfo = document.querySelectorAll('.textInfo')
    for(let i = 0; i < textInfo.length; i++){
        textInfo[i].remove()
    }
}

function placeTeams(){

    let finalStandings = simulateLeague()
    const info = document.querySelector('#info-results');

    for (i = 0; i < finalStandings.length; i++){
        const newDiv = document.createElement('div')
        const nextTeam = document.createElement('section')
        nextTeam.textContent = Number(i + 1) + '. ' + finalStandings[i][0] + ' - ' + finalStandings[i][1] + ' points';
        if (i === 0){
            nextTeam.id = 'winner'
            const winner = document.createElement('div')
            winner.className = 'textInfo'
            winner.textContent = 'Winner: ' + finalStandings[i][0]
            info.appendChild(winner)
        }
        else if (i === 3){
            const championsLeague = document.createElement('div')
            championsLeague.className = 'textInfo'
            championsLeague.textContent = 'UEFA Champions League: ' + finalStandings[i-3][0] + ', ' + finalStandings[i-2][0] + ', ' + finalStandings[i-1][0] + ' and '+ finalStandings[i][0]+'.'
            info.appendChild(championsLeague)
        }
        else if (i === 4){
            let championsLine = document.createElement('hr')
            championsLine.className = 'championsLine'
            let brSpace = document.createElement('br')
            newDiv.appendChild(championsLine)
            newDiv.appendChild(brSpace)
        }
        else if (i === 5){
            const europaLeague = document.createElement('div')
            europaLeague.className = 'textInfo'
            europaLeague.textContent = 'UEFA Europa League: ' + finalStandings[i-1][0] + ' and '+ finalStandings[i][0]+'.'
            info.appendChild(europaLeague)
        }
        else if (i === 6){
            const conferenceLeague = document.createElement('div')
            conferenceLeague.className = 'textInfo'
            conferenceLeague.textContent = 'UEFA Conference League: ' + finalStandings[i][0]+'.'
            info.appendChild(conferenceLeague)
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
            let relegationLine = document.createElement('hr')
            relegationLine.className = 'relegation'
            let brSpace = document.createElement('br')
            newDiv.appendChild(relegationLine)
            newDiv.appendChild(brSpace)
        }
        else if (i === 19){
            const relegated = document.createElement('div')
            relegated.className = 'textInfo'
            relegated.textContent = 'Relegated: ' + finalStandings[i-2][0] + ', ' + finalStandings[i-1][0] + ' and '+ finalStandings[i][0]+'.'
            info.appendChild(relegated)
        }
        finalTable.appendChild(newDiv)
        newDiv.appendChild(nextTeam)
    }

    return finalStandings;
}

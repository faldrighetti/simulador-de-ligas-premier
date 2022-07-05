const teams = ['Chelsea', 'Liverpool', 'Manchester City','Arsenal', 'Manchester United', 'Tottenham Hotspur', 'Leicester City', 
'West Ham','Everton', 'Aston Villa', 'Newcastle United', 'Southampton', 'Brighton', 'Crystal Palace', 'Wolverhampton','Leeds United',
'Brentford', 'Norwich City', 'Watford', 'Burnley']

const powerhouse = ['Chelsea', 'Liverpool', 'Manchester City']
const challenger = ['Arsenal', 'Manchester United', 'Tottenham Hotspur', 'Leicester City']
const midtable = ['Aston Villa', 'Brighton', 'Crystal Palace', 'Everton', 'Newcastle United', 'Southampton','West Ham', "Wolverhampton"]
const survival = [ 'Brentford', 'Burnley', 'Leeds United', 'Norwich City', 'Watford']

const matches = 38
const possibilities = 100

const powerhouseWin = 70
const powerhouseDraw = 85
const challengerWin = 50
const challengerDraw = 75
const midtableWin = 37
const midtableDraw = 70
const survivalWin = 30
const survivalDraw = 65

function throwDice(){
    return Math.floor(Math.random() * possibilities) + 1; // dado 1-100
}

function simulatePowerhouse(){
    
    let wins = 0
    let draws = 0
    let losses = 0
    let points = 0

        for (let i = 0; i < matches; i++){
            let result = throwDice()
            if (result <= powerhouseWin){
                wins++;
                points +=3;
            }
            else if(result > powerhouseWin && result <= powerhouseDraw){
                draws++;
                points++;
            }
            else{
                losses++;
            }
        }
    return points
}

function simulateChallenger(){

    let wins = 0
    let draws = 0
    let losses = 0
    let points = 0

    for (let i = 0; i < matches; i++){
        let result = throwDice()
        if (result <= challengerWin){
            wins++;
            points += 3;
        }
        else if(result > challengerWin && result <= challengerDraw){
            draws++;
            points++;
        }
        else{
            losses++;
        }
    }
    return points
}

function simulateMidtable(){
    
    let wins = 0
    let draws = 0
    let losses = 0
    let points = 0

    for (let i = 0; i < matches; i++){
        let result = throwDice()
        if (result <= midtableWin){
            wins++;
            points +=3;
        }
        else if(result > midtableWin && result <= midtableDraw){
            draws++;
            points++;
        }
        else{
            losses++;
        }
    }
    return points
}

function simulateSurvival(){
    
    let wins = 0
    let draws = 0
    let losses = 0
    let points = 0

    for (let i = 0; i < matches; i++){
        let result = throwDice()
        if (result <= survivalWin){
            wins++;
            points +=3;
        }
        else if(result > survivalWin && result <= survivalDraw){
            draws++;
            points++;
        }
        else{
            losses++;
        }
    }
    return points
}

function simulateLeague(){

    let arrayPoints = []

    for (let i = 0; i < teams.length; i++){
        for (let j = 0; j < powerhouse.length; j++){
            if (teams[i] === powerhouse[j]){
                let amount = simulatePowerhouse()
                arrayPoints.push([teams[i], amount]);
            }
        }
        for (let j = 0; j < challenger.length; j++){
            if (teams[i] === challenger[j]){
                let amount = simulateChallenger()
                arrayPoints.push([teams[i], amount]);
            }
        }
        for (let j = 0; j < midtable.length; j++){
            if (teams[i] === midtable[j]){
                let amount = simulateMidtable()
                arrayPoints.push([teams[i], amount]);
            }
        }
        for (let j = 0; j < survival.length; j++){
            if (teams[i] === survival[j]){
                let amount = simulateSurvival()
                arrayPoints.push([teams[i], amount]);
            }
        }
    }

    let finalStandings = arrayPoints.sort(([a, b], [c, d]) => d - b);
    return finalStandings;
    
}

function untie(){
    let finalStandings = simulateLeague()

    for (let i = 0; i < finalStandings.length; i++){

    }
}
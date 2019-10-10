const mock = [
  {
    name: 'Luffy',
    strength: 10
  },
  {
    name: 'Law',
    strength: 10
  },
  {
    name: 'Doflamingo',
    strength: 6
  },
  {
    name: 'Kaido',
    strength: 9
  },
  {
    name: 'Kidd',
    strength: 7
  },
  {
    name: 'Teach',
    strength: 9.3
  },
  {
    name: 'Linlin',
    strength: 9.2
  },
  {
    name: 'Shirohige',
    strength: 9.5
  },
  {
    name: 'Nami',
    strength: 9.3
  }
]

function getWinner(a, b) {
    return a > b ? a : b
}
  
function duel() {
    let scores = {}
    for (let i=0 ; i<mock.length ; i++) {
        for (let j=i; j<mock.length ; j++) {
            if (mock[i].name != mock[j].name) {
                let winner = null
                if (mock[i].strength === mock[j].strength) {
                    winner = getWinner(mock[i].name, mock[j].name)
                    if (scores[winner]) scores[winner].win++
                    else scores[winner] = {win: 1} 
                } else {
                    winner = getWinner(mock[i].strength, mock[j].strength)
                    if (mock[i].strength === winner) {
                        if (scores[mock[i].name]) scores[mock[i].name].win++
                        else scores[mock[i].name] = {win: 1} 
                    } else {
                        if (scores[mock[j].name]) scores[mock[j].name].win++
                        else scores[mock[j].name] = {win: 1} 
                    }
                }
            }
        }
    }
    var sorted = [];
    for (var i in scores) {
        sorted.push([i, scores[i].win])
    }
    sorted.sort(function(a, b) {
        return b[1] - a[1];
    });
    return sorted
}

function getStrongest() {
    return duel()[0][0]
}

function getRunnerUp() {
    return duel()[1][0]
}

console.log('The Strongest Pirates is', getStrongest())
console.log('The Second Strongest Pirates is', getRunnerUp())

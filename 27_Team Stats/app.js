const team = {
    _players: [
      {fistName: 'Alex', lastName: 'Lim', age: 22},
      {fistName: 'Leo', lastName: 'Chan', age: 25},
      {fistName: 'Justin', lastName: 'Tan', age: 27},
    ],
    _games: [
      {opponent:'Jets', teamPoints: 42, opponentPoints: 27},
      {opponent:'Giants', teamPoints: 45, opponentPoints: 12},
      {opponent:'Eagles', teamPoints: 31, opponentPoints: 15},
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game);
    }
  };
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Titans',100, 98);
  console.log(team.players);
  console.log(team.games);
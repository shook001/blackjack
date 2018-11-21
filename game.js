var Deck = require('./Deck.js');

// The Duck Tales guys are going to the casino and 
// they want to simulate 20 games of black jack.  Each
// players starts with 200 dollars.  Each game is $15.  If
// they lose all their money they can no longer play.  Simulate
// the outcome.  At the end output the player and how much
// they each won / lost.

// RULES
// Number of Decks between 1-8
// Dealer Hits on 16 and Below

//Simulation Data 
const _ante = 15, _maxRounds = 20, _startingMoneyAmount = 200;
var _numberOfDecks = 1, _deck, _round = 1;
var _players = [
    new Player('Huey', _startingMoneyAmount),
    new Player('Dewey', _startingMoneyAmount),
    new Player('Luey', _startingMoneyAmount),
    new Player('Scrooge', _startingMoneyAmount)];
var _dealer = new Dealer('Dealer');

/*
loop for 20 rounds {

    create deck of Decks //shoe

    players put in money //ante
        every round, each player ante's $15

    dealer shuffles deck - every round

    dealer deals cards to players and dealer
        dealer's first card is down, second is showing up
        players cards are all face up

    player 1 will evaluate and perform action (hit, stay, split double down....)
        eventually must stay or bust

    dealer will evaluate then stay or hit

    reconcile - payout or collect ante

}

print results
*/


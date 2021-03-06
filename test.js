var Deck = require('./Deck.js');
var player = require('./player.js');
var dealer = require('./dealer.js');
var Card = require('./Card.js');

const _ante = 15, _maxRounds = 20, _startingMoneyAmount = 200;
var _numberOfDecks = 1, _deck, _round = 1, _pot = 0;
var _players = [new player('Huey', _startingMoneyAmount),
                new player('Dewey', _startingMoneyAmount),
                new player('Luey', _startingMoneyAmount),
                new player('Scrooge', _startingMoneyAmount)];
var _dealer = new dealer('Dealer');

function buildDeck() {
    _deck = new Deck();
    for (i = 0; i < 7; i++) {
        _deck.cards = _deck.cards.concat(new Deck().cards);
    }
}

function shuffle(deck) {
/*    for (let i = 0; i < 1000; i++){
        const i = Math.floor((Math.random() * deck.length));
        let j = Math.floor((Math.random() * deck.length));
        let tmp = deck[i];

        deck[i] = deck[j];
        deck[j] = tmp;
    }
*/



    for (let i = deck.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i));
        [deck.cards[i], deck.cards[j]] = [deck.cards[j], deck.cards[i]];
    }
    return deck;


}

function deal(deck, players) {
    for (let i = 0; i < 2; i++) {
        for (let i = 0; i < _players.length; i++) {
            players[i].hands[0].push(deck.cards.pop());
        }
        _dealer.hand.push(deck.cards.pop());
    }
}

buildDeck();
for (let i = 0; i < _players.length; i++) _players[i].anteUp( _ante )
_deck = shuffle (_deck);


deal( _deck, _players);

//_dealer.hand.push(new Card('J', 'black', 'spade'));
//_dealer.hand.push(new Card('J', 'black', 'club'));
//_players[0].hands[0].push(new Card('A', 'black', 'club'));
//_players[0].hands[0].push(new Card('5', 'black', 'club'));

for ( let i = 0; i < _players.length; i++ ) {
    if ( _dealer.upCard().value === 'A' ) _players[i].insurance()
    if ( _players[i].evaluate( _dealer.upCard()) == 'W' ) _players[i].surrender( _ante )
    else while ( _players[i].evaluate( _dealer.upCard()) == 'H' || _players[i].evaluate( _dealer.upCard()) == 'W' )
             _dealer.hitPlayer( _deck, _players[i] )
}

//while( _players[0].evaluate( _dealer.upCard()) == 'H' ) _dealer.hitPlayer( _deck, _players[0] )

console.log( 'Dealer','Players','Action');
console.log( _dealer.upCard().value);
for (let i = 0; i < 4; i ++) {
    for (let j = 0; j < _players[i].hands[0].length; j++) {
        console.log( '        ', _players[i].hands[0][j].value )
    } 
    console.log( '              ', _players[i].evaluate( _dealer.upCard()), _players[i].bettingBox,
                                    _players[i].money, _players[i].hasInsurance );
}

/*
for (let i=0; i < _deck.cards.length; i++){
    console.log( i, _deck.cards[i].suit, _deck.cards[i].value );
}
*/
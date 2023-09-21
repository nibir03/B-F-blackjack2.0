let deck = [];
let colors = ["Hearts", "Clubs", "Diamonds", "Spades"]
let cards = [ "2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];

for (let color of colors) {
    for (let card of cards) {
        deck.push(`${color} ${card}`);    //  förstod ine med (`${color} ${card}`) varför kan man inte skriva { card: card, color: color } eller vad är skillnaden?
    }
}

function ShuffleDeck(deck) {
    for (let i = deck.lenght - 1; i > 0; i --) {
        let j = Math.floor(Math.random() * deck.lenght); // förstod inte varför man skulle använda (i + 1) funkade bra med deck.lenght fick samma resultat
        [deck[i]], [deck[j]] = [deck[j],] [deck[i]];
    }
    return deck;
}

//ShuffleDeck(deck);
//console.log(deck);

function dealcards(deck, numCardsHand){
    return deck.splice(0, numCardsHand);
}

let playerhand = dealcards(deck, 2);
let dealerhand = dealcards(deck, 2);

console.log(deck);
console.log(deck);
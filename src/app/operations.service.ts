import { Deck } from './deck.model';
import { Card } from './card.model';

export class OperationService {
    private deck: Deck = new Deck();
    suiteCards: Card;
    suite: string;
    number: any;
    random(index: number) {
        return Math.floor(Math.random() * index);
    }
    popSuite(suite: string) {
        delete this.deck.newDeck[suite];
    }
    popCard(index: any) {
        if (index > -1) {
          this.suiteCards.cards.splice(index, 1);
       }
    }
    getRandomSuite() {
        this.suite = Object.keys(this.deck.newDeck)[this.random(Object.keys(this.deck.newDeck).length)];
        this.suiteCards = this.deck.newDeck[this.suite];
        return this.suite;
    }
    getRandomCard() {
        console.log(this.suiteCards);
        this.number = this.suiteCards.cards[this.random(this.suiteCards.cards.length)];
        return this.number;
    }
}

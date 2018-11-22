import { Card } from './card.model';

export class Deck {
    public newDeck = {
        'club': new Card(),
        'spade': new Card(),
        'heart': new Card(),
        'diamond': new Card()
    };
    // tslint:disable-next-line:max-line-length
    public totalCards = this.newDeck.club.cards.length + this.newDeck.spade.cards.length + this.newDeck.heart.cards.length + this.newDeck.diamond.cards.length;
}

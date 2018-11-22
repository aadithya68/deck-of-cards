import { Component, OnInit, ViewChild } from '@angular/core';
import { Deck } from '../deck.model';
import { Card } from '../card.model';
import { NgForm } from '@angular/forms';
import { OperationService } from '../operations.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private opService: OperationService) {

  }
  @ViewChild('f') myForm: NgForm;
  private deck: Deck = new Deck();
  canShuffle = false;
  suiteArr: string[];
  cardArr: any[];
  suiteCards: Card;
  totalCards = 52;
  noCards = false;
  suite: string;
  card: any;
  ngOnInit() {
    if (this.totalCards) {
      this.canShuffle = true;
      console.log(this.canShuffle);
    }
  }



  onDraw(form: NgForm) {
    const value = form.value;
    this.suiteArr = [];
    this.cardArr = [];
    if (this.totalCards >= value.cards) {
      for (let i = 0; i < value.cards; i++) {
        this.suite = this.opService.getRandomSuite();
        this.suiteArr.push(this.suite);
        this.suiteCards = this.deck.newDeck[this.suite];
        this.card = this.opService.getRandomCard();
        this.cardArr.push(this.card);
        this.opService.popCard(this.suiteCards.cards.indexOf(this.card));
        if (this.suiteCards.cards.length < 1) {
          this.opService.popSuite(this.suite);
        }
      }
    } else {
      this.totalCards = 0;
      this.canShuffle = false;
      this.noCards = true;
    }
    this.totalCards -= value.cards;
    console.log(this.deck.newDeck);

  }


}

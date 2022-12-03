import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subject, Observable, Subscription} from 'rxjs';
import {participant} from '../shared/model/participant.model';

@Component({
  selector: 'app-basicobservable',
  templateUrl: './basicobservable.component.html',
  styleUrls: ['./basicobservable.component.css']
})
export class BasicobservableComponent implements OnInit, OnDestroy {
  higherNumber = 10;
  private pid = 0;
  private guessed = false;
  private organizator$: Subject<number> = new Subject();
  myObservable: Observable <number>;
  private suscription: Subscription;
  organizer = {
    howmany: 0,
    randomNumber: parseInt((Math.random()*this.higherNumber).toFixed(0))
  };
  player1: participant = {
    idnumber: 1,
    winner: false,
    ticket: parseInt((Math.random() * this.higherNumber).toFixed(0))
    };
  player2: participant = {
    idnumber: 2,
    winner: false,
    ticket: parseInt((Math.random() * this.higherNumber).toFixed(0))
  };

  constructor() {};

  notifysuscriptor(aobserver:participant, anumber:number){
    if (aobserver.ticket == anumber) {
      aobserver.winner = true;
      this.guessed = true;
    }
   }

  ngOnInit() {
    this.myObservable = this.organizator$.asObservable();
    this.suscription = this.myObservable.subscribe(
      (anumber) =>{this.notifysuscriptor(this.player1, anumber),
                        this.notifysuscriptor(this.player2, anumber)}
    );
    this.pid = window.setInterval(()=>{this.getRandomNumbers()},1000);
  }

  getRandomNumbers() {
    if (!this.guessed) {
      this.organizer.randomNumber = parseInt((Math.random() * this.higherNumber).toFixed(0));
      this.organizer.howmany ++;
      this.organizator$.next(this.organizer.randomNumber);
    }
    else {
      this.organizator$.complete();
      clearInterval(this.pid);
    }
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }
}

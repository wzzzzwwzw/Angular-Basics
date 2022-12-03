import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-eventlistening',
  templateUrl: './eventlistening.component.html',
  styleUrls: ['./eventlistening.component.css']
})
export class EventlisteningComponent implements OnInit {
  coordX = 0;
  coordY = 0;
  constructor() { }
  ngOnInit() {}

  @HostListener('mousemove', ['$event'])
    showCoords(e: MouseEvent) {
      this.coordX = e.clientX;
      this.coordY = e.clientY;
  }
  // El siguiente código, de detección de una tecla
  // está comentado para evitar que interfiera con el resto
  // de ejemplos. Si se descomenta, al pulsar una tecla
  // aparecerá un alert con el caracter correspondiente

  @HostListener('document:keypress', ['$event'])
    alertKey(e: KeyboardEvent) {
      alert ('Char: ' + e.key);
    }

}

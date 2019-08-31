import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-log-erro',
  templateUrl: './log-erro.component.html',
  styleUrls: ['./log-erro.component.css']
})
export class LogErroComponent implements OnInit {
  @Input()
  mostraErro: boolean;
  @Input()
  msgErro: string;

  constructor() { }

  ngOnInit() {
  }

}

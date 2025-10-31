import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
  import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-button',
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit{
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter()

  constructor(){}

  ngOnInit(): void {

  }

  onClick(): void {
    this.btnClick.emit();
  }

}

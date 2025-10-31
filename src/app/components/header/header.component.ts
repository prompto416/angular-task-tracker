import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit{
  title:string = 'my-app';
  constructor() { }

  ngOnInit(): void {

  }

  toggleAddTask(): void {
    console.log('toggle add task!')
  }



}

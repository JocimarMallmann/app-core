import { Component, Input, OnInit } from '@angular/core';

import { Button } from './button';

@Component({
  selector: 'miau-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() button: Button;

  constructor() { }

  ngOnInit(): void {
  }

}

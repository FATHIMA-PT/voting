import { Component } from '@angular/core';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent {
  constructor(
    public firstName: string,
    public lastName: string,
    public dob: string,
    public city: string,
    public nationality: string,
    public state: string,
    public pinCode: string
  ) {}
}

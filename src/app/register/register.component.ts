import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  item:any={name:''};
  constructor(private ser:LoginService){

  }
  ngOnInit(): void {
      
  }
  agregar(){
    this.ser.addRegister();
  }
}

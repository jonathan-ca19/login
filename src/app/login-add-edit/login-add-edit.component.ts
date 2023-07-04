import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-add-edit',
  templateUrl: './login-add-edit.component.html',
  styleUrls: ['./login-add-edit.component.scss']
})

export class LoginAddEditComponent implements OnInit {
  loginForm :FormGroup;

  constructor (private _fb: FormBuilder,
    private _logService:LoginService,
    private _dialogRef: MatDialogRef<LoginAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _coreService: CoreService, 
    ) {
    this.loginForm = this._fb.group({
      firstname:'',
      lastname:'',
      email:'',
      password:''
  })
}


  ngOnInit():void{
    this.loginForm.patchValue(this.data)
  }


onFormSubmit(){
  if(this.loginForm.valid){
    if(this.data){
      this._logService.updateUser(this.data.id, this.loginForm.value).subscribe({
      next: (val :any ) => { 
        this._coreService.openSnackBar('Usuario actualizado correctamente')
        this._dialogRef.close(true);
      },
      error:(err :any)=>{
        console.error(err);
      },
    })
    }else{
      this._logService.addUser(this.loginForm.value).subscribe({
        next: (val :any ) => {
          this._coreService.openSnackBar('Usuario añadido correctamente')
          this._dialogRef.close(true);
        },
        error:(err :any)=>{
          console.error(err);
        },
      })
    }
    
}
}
}
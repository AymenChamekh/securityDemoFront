import { Component } from '@angular/core';
import { User } from '../../model/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  admin : User = new User();

  adminForm: FormGroup;
  constructor(private fb: FormBuilder , private authservice :AuthService){
    this.adminForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });

  }
  onSubmit(){

    if (this.adminForm.valid && this.adminForm.value.confirmerMotDePasse == this.adminForm.value.password) {
    this.admin = this.adminForm.value;
   this.authservice.register(this.admin).subscribe(data =>{
         console.log(data),
         (error:any) =>{console.log(error)}
   });
  }
}
}

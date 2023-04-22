import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private route:Router) {

  }

  form_data = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
};

onSubmit() {
  console.log(this.form_data);
  this.route.navigate(['/submitted'])
}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiClientService } from '../api-client.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contactForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: '',
  })
  constructor(
      private formBuilder: FormBuilder,
      private api: ApiClientService,
    ) { }

  ngOnInit(): void {
  }

  handleSubmit():void {
    // data to server
    console.log(this.contactForm.value);
    this.api.submitContact(this.contactForm.value);
    
    this.contactForm.reset();
  }

}

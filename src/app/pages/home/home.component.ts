import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  public formLogin!: FormGroup;
  correo!:string;

  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      nombre:['', 
        [
          Validators.required,
          Validators.minLength(12)
        ]
      ],
      email:['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      telefono:['', 
        [
          Validators.required,
          Validators.minLength(9)
        ]
      ],
      asunto:['',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ],
      mensage:['',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]
    })

    this.loadAPI()
  }

  //function para simular la carga de un API
  loadAPI():any{
    const response = {
      nombre:'',
      email:'',
      telefono:'',
      asunto:'',
      mensage:'',
     
    };

    this.formLogin.patchValue(response);
    
    
    /*
    this.formLogin.patchValue(
      {
        email:response.email,
        password: response.password,
        term: response.term
      }
    )
     */
    
  }


  send(): any{
    console.log(this.formLogin.value)
  }

}

import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements AfterViewChecked,AfterViewInit,OnInit{
  gender="Female"
  submitted=false
  users:{id:Number,name:String,email:String,gender:String}[]=[]
  @ViewChild("f") formObject!:NgForm;
  
  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    // this.formObject.setValue({
    //   userdata:{
    //     username:'Naushad',
    //     email:'email@mail.com'
    //   },
    //   gender:this.gender
    // })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
       if(this.formObject.controls["userdata"]){
        this.formObject.form.setValue({
            gender:this.gender,
            userdata:{
                username:'Naushad',
                email:'cognizant@mail.com'
              },
            
            })
          }

        this.formObject.form.patchValue({
          userdata:{
            username:'Ansari',
            email:'humana@mail.com'
          },
          gender:'Male',
        })
      // this.cdr.detectChanges()
    }, 1);
  }

  ngAfterViewChecked(): void {
    // console.log(this.formObject)

    // if(this.formObject.controls["userdata"]){

    //   this.formObject.form.setValue({
    //       gender:this.gender,
    //       userdata:{
    //           username:'Naushad',
    //           email:'email@mail.com'
    //         },
          
    //       })
    //     }
    //   this.cdr.detectChanges()
    
    // this.formObject.form.patchValue({
    //   userdata:{
    //     username:'Naushad',
    //     email:'email@mail.com'
    //   },
    //   gender:this.gender,
    // })
    
  }
  onSubmit(){
    this.submitted=true
    this.users.push({
      id:Number(Math.floor(Math.random()*1000+1000).toString()+this.users.length.toString()),
      name:this.formObject.value.userdata.username,
      email:this.formObject.value.userdata.email,
      gender:this.formObject.value.gender
    })
    this.reset()
  }

  // onSubmit(f){
  //   console.log(f.value)
  // }

  reset(){
    this.formObject.form.reset()
  }
}

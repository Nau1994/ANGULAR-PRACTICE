import { Component, OnInit } from '@angular/core';
import {  AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit{
  addedHobbies:string[]=[]
  userForm!:FormGroup
  submitted=false
  users:{id:Number,name:String,email:String,gender:String,hobbies:string[]}[]=[]

  ngOnInit(): void {
    this.userForm=new FormGroup({
      userdata:new FormGroup({
        username:new FormControl('Naushad',[Validators.required]),
        email:new FormControl('test@mail.com',[Validators.email],[this.isRestrictedEmail as AsyncValidatorFn]),
      }),
      gender:new FormControl('Male'),
      hobby:new FormControl(null,[this.onAlreadyHobby.bind(this) as ValidatorFn]),
      hobbies:new FormArray([])
    })
  }

  isRestrictedEmail(control:FormControl):Promise<ValidationErrors|null>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          if(control.value=="test@test.com"){
            resolve({IsRestricted:true})
          }else resolve(null)
        },200)
      })
  }

  // isRestrictedEmail():AsyncValidatorFn{
  //   return (control:AbstractControl):Promise<ValidationErrors|null>|Observable<ValidationErrors|null>=>{
  //     return new Promise((resolve,reject)=>{
  //       setTimeout(()=>{
  //         if(control.value=="test@test.com"){
  //           resolve({IsRestricted:true})
  //         }else resolve(null)
  //       },200)
  //     })
  //   }
  // }

  onSubmit(){
    // console.log(this.userForm)
    console.log(this.users)
  }
  onAdd(){
    this.submitted=true
    this.users.push({
      id:Number(Math.floor(Math.random()*1000+1000).toString()+this.users.length.toString()),
      name:this.userForm.value.userdata.username,
      email:this.userForm.value.userdata.email,
      gender:this.userForm.value.gender,
      hobbies:this.userForm.value.hobbies
    })

    console.log((<FormArray>this.userForm.get('hobbies')).clear())

    this.userForm.reset()
  }
  get hobbies(){
    return (<FormArray>this.userForm.get('hobbies')).controls
  }

  onAddHobby(value:string){
    if(!this.addedHobbies.includes(value) && value!=''){
      const control:FormControl=new FormControl(value,[Validators.required]);
    (<FormArray>this.userForm.get('hobbies')).push(control)
    this.addedHobbies.push(value)
    } 
    console.log(this.userForm)
  }

  onAlreadyHobby(control:FormControl):{[s:string]:boolean}|null{
    console.log(this.addedHobbies)
    if(this.addedHobbies.includes(control.value)){
      
      return {isAlreadyAdded:true}
    }else return null
  }
  onRemoveHobby(index:number){
    // (<FormArray>this.userForm.get('hobbies')).removeAt(index)
  }
}

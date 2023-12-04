import { FormGroup } from "@angular/forms"

export function mustMatch(control:string,matchingControl:string) {
  return (formGroup:FormGroup)=>{
      const controlInput = formGroup.controls[control];
      const matchingControlInput = formGroup.controls[matchingControl];
      if (controlInput.value !== matchingControlInput.value) {
        matchingControlInput.setErrors({'noMatch':true});
      }
      else{
        matchingControlInput.setErrors(null);
        //matchingControlInput.setErrors({'noMatch':null});
        //matchingControlInput.removeError({'noMatch'})
      }
  }
}
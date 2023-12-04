import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(matches:any,term:any): any {
    if (term===undefined)
      return matches;

    return matches.filter((match) => {  
      return (match.teamOne.toLowerCase().includes(term.toLowerCase()) ||  match.teamTwo.toLowerCase().includes(term.toLowerCase()) 
      || match.scoreOne == term || match.scoreTwo == term) ;  

    });
  }

}

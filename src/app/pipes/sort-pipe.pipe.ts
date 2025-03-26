import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {
  transform(value: any[], field:any): any[] {
    if (!value || !field) return value;

    value.sort((a:any, b:any) => {
      if(a[field] < b[field]){
        return -1
      }else{
        if(a[field] > b[field]){
          return 1;
        }else{
          return 0;
        }
      }
    })
    return value;
  }


  // transform(value: any[], field: string, order: string = 'asc'): any[] {
  //   if (!value || !field) return value;

  //   return [...value].sort((a, b) => {
  //     let fieldA = a[field]?.toString().toLowerCase() || '';
  //     let fieldB = b[field]?.toString().toLowerCase() || '';

  //     // Extract numeric values from strings (if present)
  //     let numA = fieldA.match(/\d+/g);
  //     let numB = fieldB.match(/\d+/g);

  //     let nameA = fieldA.replace(/\d+/g, '').trim();
  //     let nameB = fieldB.replace(/\d+/g, '').trim();

  //     let numberA = numA ? parseInt(numA[0], 10) : 0;
  //     let numberB = numB ? parseInt(numB[0], 10) : 0;

  //     if (nameA === nameB) {
  //       return order === 'asc' ? numberA - numberB : numberB - numberA;
  //     }

  //     return order === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
  //   });
  // }

}

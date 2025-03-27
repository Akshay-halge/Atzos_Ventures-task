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

}

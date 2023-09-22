import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(value: any, filteredCategory: string): any {

    if (!value || value.length === 0 || !filteredCategory) {

      return value;

    }

    return value.filter((product: { productCategory: string; }) => product.productCategory.toLowerCase().includes(filteredCategory.toLowerCase()));

  }

 

}

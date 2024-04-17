import { Component, OnInit } from '@angular/core';
import { Pins } from '../../models/index';
import { LocalStorageService } from 'src/app/core/services/localstorage.service';
import { MatDialog } from '@angular/material/dialog';
import { AddPinsComponent } from '../add-pins/add-pins.component';
import { AddCustomersComponent } from 'src/app/features/customers/components/add-customers/add-customers.component';

@Component({
  selector: 'app-pins-list',
  templateUrl: './pins-list.component.html',
  styleUrls: ['./pins-list.component.css']
})
export class PinsListComponent implements OnInit {
  pinsList:Pins[] = [];
  constructor(private localStorageService: LocalStorageService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.pinsList = this.localStorageService.pins;
    let date = new Date();
    sessionStorage.setItem("currentDate",JSON.stringify(date));
    let data = {
      name: "abcd",
      class: 'Ist',
      age:'30'
}

    // console.log('data int',data.name)
    let data2 = data
    // console.log('newwwtest', data2);

    let data3 = { ...data }
    
    data2.name='john'
    data3.name = 'change'
    
  console.log('shallow',data2)
  console.log('spreed',data3)
  console.log('orignalData',data)


    
  // let arr = [1,2,5,6,7,9]
    
  //   let searchArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   this.findMissingNo(arr,searchArr);

  //   let dArray:number[] = [1, 2, 3, 4, 4, 4, 5, 6, 7];

  //   this.removeDuplicate(dArray);
    
    
    // this.findOddWord('hello my friend how are you','hello my boss how are you hello')


    let arr:any = [1,2,3];
    // this.getSum(arr);  
  }
  getSum(arr:any){
  
    let data;
    data = arr.reduce((acc: any, curr: any) => {
      return  acc+curr
    })
    console.log(data);
    return data

  }
  

  removeDuplicate(data: number[]) {
    let givenArray = data
    data.forEach(e => {

      let value = givenArray.indexOf(e)
      if (givenArray.indexOf(e)) {
        
      }
    })
  }




  findMissingNo(data:number[], searchArr:number[]) {
    
    let searchData:number[] = data
    let search:number[] = searchArr
    let values = [];
    for (let i = 1; i < search.length; i++){
      if (!searchData.includes(i)) {
        values.push(i);
      } else {
        let dataV = searchData.includes(i);
        dataV
      }

    }
    console.log('missing', values);
return values

  }






  addPins() {
  this.dialog.open(AddPinsComponent,{
    minWidth: '350px',
    disableClose: true
  })
    .afterClosed().subscribe(res => {
      if (res) {
        this.pinsList = this.localStorageService.pins
    }
   })
}
  addCustomers() {
  this.dialog.open(AddCustomersComponent,{
    maxWidth: '550px',
    minWidth: '350px',
    disableClose: true
  })
  .afterClosed().subscribe(()=>{ })
}

  
 findOddWord(set1:string, set2:string) {
  const words1 = set1.split(' ');
  const words2 = set2.split(' ');

  // Create a set to store words from both sets
  const allWords = new Set([...words1, ...words2]);

  // Create an array to store words that occur an odd number of times
  const oddWords:any = [];

  // Iterate through all words
  allWords.forEach(word => {
      // Count occurrences of the word in both sets
      const count1 = words1.filter(w => w === word).length;
      const count2 = words2.filter(w => w === word).length;

      // Check if the total count is odd
      if ((count1 + count2)=== 1) {
          oddWords.push(word);
      }
  });

  return oddWords;
}

  
  
  
  
  
  
}

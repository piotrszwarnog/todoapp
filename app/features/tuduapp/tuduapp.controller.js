/*global Firebase */
export default class TuduappController {
  constructor($firebaseArray) {
      
    let ref = new Firebase("https://kotogniew.firebaseio.com/items");
    this.items = $firebaseArray(ref);
    
    console.log(this.items)
  }
 
}
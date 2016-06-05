/*global Firebase */
export default class TuduappController {
  constructor($firebaseArray) {
      
    let ref = new Firebase("https://kotogniew.firebaseio.com/items");
    this.items = $firebaseArray(ref);
    this.content = '';
    this.userAddress = '';
    this.completed = false;
    this.itemsRef = ref;
    
    console.log(this.items)
  }
  
  addItem() {
       this.itemsRef.push({
          content: this.content,
          userAddress: this.userAddress,
          completed: "false"
      });
    }
}
/*global Firebase */
export default class TuduapController {
  constructor(TuduapService, $stateParams, $firebaseArray) {
    
    this.selectedItem = $stateParams.item
    
    TuduapService.getItem(this.selectedItem)
      .then(this.handleGetItemSuccess.bind(this));
    
    // TuduapService.getRepos(this.selectedUser)
    //   .then(this.handleGetReposSuccess.bind(this));
      
    let ref = new Firebase("https://kotogniew.firebaseio.com/items");
    this.items = $firebaseArray(ref);

  }
  
  handleGetItemSuccess(response) {
    this.Item = response.data;
    console.log(this.Item);
  }
  
//   handleGetReposSuccess(response) {
//     this.Repos = response.data;
//     console.log(this.Repos);
//   }
  
  addNote() {
    this.data.$add({text: 'dupa!'})
  }
 
}
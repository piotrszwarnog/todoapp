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

  addItem(addInpt) {
    this.itemsRef.push({
      content: this.content,
      userAddress: this.userAddress,
      completed: "false"
    });
    document.getElementById(addInpt).value = '';
  }

  deleteItem(id) {
    this.itemsRef.child(id).remove();
  }

  completeItem(id) {

    let inputRef = new Firebase("https://kotogniew.firebaseio.com/items");
    var cmpltd;

    inputRef.once("value", function(snapshot) {
      console.log(snapshot.child(id).val().completed);
      if (snapshot.child(id).val().completed == 'true') {
        inputRef.child(id).update({
          'completed': 'false'
        });
        cmpltd = false;
      }
      else {
        inputRef.child(id).update({
          'completed': 'true'
        });
        cmpltd = true;
      }

    });
    this.updateButtonColor(cmpltd, id)
  }

  updateButtonColor(cmpltd, btnId) {
    var property = document.getElementById(btnId);
    property.classList.add(cmpltd ? 'btn-warning' : 'btn-success');
    property.classList.remove(cmpltd ? 'btn-success' : 'btn-warning');
  }

}

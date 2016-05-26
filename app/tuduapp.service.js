export default class TuduapService {
  constructor($http) {
    this.$http = $http;
  }

  getItem(item) {
    return this.$http.get('')
  }
  
//   getRepos(user) {
//     return this.$http.get('')
//   }
}
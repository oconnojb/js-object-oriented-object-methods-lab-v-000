function BoardMember(n, h, t) {
  this.name = n;
  this.homeState = h;
  this.training = t;
  this.veto = function() {
    return "No, I must disagree"
  }
}

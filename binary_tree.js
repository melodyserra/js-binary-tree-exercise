function BinTree(value){
  this.left = null;
  this.right = null;
  this.value = value;
}


BinTree.prototype.insert = function(val){
  if (this.value === null){
    this.value = val;
  } else {
    if (val >= this.value){
      if (this.right === null ){
        this.right = new BinTree(val);
      } else {
        this.right.insert(val);
      }
    } else if (val < this.value) {
      if (this.left === null ){
        this.left = new BinTree(val);
      } else {
        this.left.insert(val);
      }
    }
  }
  return this;
};

BinTree.prototype.isLeaf = function(){
  // if (this.right === null && this.left === null ){
  //     return true;
  // } else {
  //     return false;}
  // // return this.right === null && this.left === null ? true : false;
  // best below, done using ternary
  if(this.value !== null){
  return this.right === null && this.left === null;
  } else {
    console.log("nothing here");
  }
};

BinTree.prototype.search = function(val){
  if(this.value === val){
  return true;
} else {
      if(this.isLeaf() === true){
        return false;
      } else {
        if(val > this.value){
          return this.right.search(val);
        } else{
          return this.left.search(val);
        }
      }
    }
};

try{
  module.exports = BinTree;
} catch(e){

}

String.prototype.removeDuplicate = function() {
  const words = this.split(' ');
  const uniqueWords = Array.from(new Set(words));
  return uniqueWords.join(' ');
};

let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";
console.log(x.removeDuplicate());

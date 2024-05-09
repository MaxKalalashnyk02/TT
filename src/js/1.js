function nodeChildCount(node, deep = Infinity) {
  let count = 0;
  
  function countNodes(node, currentDepth, maxDepth) {
      if (currentDepth > maxDepth) return;
      
      count++;
      
      if (node.childNodes) {
          for (let i = 0; i < node.childNodes.length; i++) {
              countNodes(node.childNodes[i], currentDepth + 1, maxDepth);
          }
      }
  }
  
  countNodes(node, 0, deep);
  
  return count;
}

const div = document.createElement('div');
const p = document.createElement('p');
const span = document.createElement('span');
p.appendChild(span);
div.appendChild(p);

console.log(nodeChildCount(div));
console.log(nodeChildCount(div, 1));
console.log(nodeChildCount(div, 2));
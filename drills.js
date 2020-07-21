const BinarySearchTree = require('./BinarySearchTree')

function main() {
  let numberTree = new BinarySearchTree();
  numberTree.insert(3, 3);
  numberTree.insert(1, 1);
  numberTree.insert(4, 4);
  numberTree.insert(6, 6);
  numberTree.insert(9, 9);
  numberTree.insert(2, 2);
  numberTree.insert(5, 5);
  numberTree.insert(7, 7);


  let letterTree = new BinarySearchTree();
  letterTree.insert('E');
  letterTree.insert('A');
  letterTree.insert('S');
  letterTree.insert('Y');
  letterTree.insert('Q');
  letterTree.insert('U');
  letterTree.insert('E');
  letterTree.insert('S');
  letterTree.insert('T');
  letterTree.insert('I');
  letterTree.insert('O');
  letterTree.insert('N');

  // console.log(height(numberTree));
  // console.log(show_tree(numberTree));

}

main();

//find a height of our BST 
//each step = 1
//check if the current node has a left or right
//if it does run recursive function with this node
//if node height(node)

function height(node) {
  if (!node) {
    return 0;
  }
  return Math.max(height(node.left),height(node.right)) +1;
}

function render_tree(tree) {
	const left = tree.left ? render_tree(tree.left) : {l: [], w: 0};
	const right = tree.right ? render_tree(tree.right) : {l: [], w: 0};
	const top = " " + tree.key + " ";
	const l = [" ".repeat(left.w) + top];
	for (let i = 0; i < left.l.length || i < right.l.length; ++i)
		l.push((left.l[i] || "").padEnd(left.w, " ") + " ".repeat(top.length) + (right.l[i] || ""))
	return {w: left.w + top.length + right.w, l};
}
function show_tree(tree) {render_tree(tree).l.forEach(l => console.log(l));}


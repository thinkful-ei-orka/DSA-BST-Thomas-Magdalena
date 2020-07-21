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

  console.log(numberTree);

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
}

main();
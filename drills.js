const BinarySearchTree = require('./BinarySearchTree')

function main() {
    let numberTree = new BinarySearchTree();
    numberTree.insert(3);
    numberTree.insert(1);
    numberTree.insert(4);
    numberTree.insert(6);
    numberTree.insert(9);
    numberTree.insert(2);
    numberTree.insert(5);
    numberTree.insert(7);
    
    console.log(numberTree.find(6))
}

main();
/**
 * Binary Search Tree Constructor Function
 * @param value
 * @constructor
 */
function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

//**************************************************
//                     Insert
//**************************************************

/**
 * Insert a new value in the tree
 * @param value
 */
BST.prototype.insert = function (value) {
    if (value <= this.value) {
        if (!this.left) {
            this.left = new BST(value);
        } else {
            this.left.insert(value);
        }

    } else if (value > this.value) {
        if (!this.right) {
            this.right = new BST(value);
        } else {
            this.right.insert(value);
        }
    }
};

//**************************************************
//                     Contains
//**************************************************

/**
 * Search for if a Binary Search Tree contains a value
 * @param value
 * @returns {boolean}
 */
BST.prototype.contains = function (value) {
    if (value === this.value) {
        return true;
    }
    else if (value < this.value) {
        if (!this.left) {
            return false;
        } else {
            return this.left.contains(value);
        }
    }
    else if (value > this.value) {
        if (!this.right) {
            return false;
        } else {
            return this.right.contains(value);
        }
    }
};

//**************************************************
//              Depth First Traversal
//**************************************************

/**
 * Will traverse a binary search tree and apply iteratorFunc to all nodes in tree
 * This starts at top and traverses down in the order provided
 * @param iteratorFunc
 * @param order - possible 'pre-order', 'in-order', 'post-order'
 */
BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
    if (order === 'pre-order') {
        iteratorFunc(this.value);
    }
    if (this.left) {
        this.left.depthFirstTraversal(iteratorFunc, order);
    }
    if (order === 'in-order') {
        iteratorFunc(this.value);
    }
    if (this.right) {
        this.right.depthFirstTraversal(iteratorFunc, order);
    }
    if (order === 'post-order') {
        iteratorFunc(this.value);
    }
};

//**************************************************
//              Breadth First Traversal
//**************************************************

/**
 * reads a binary search tree from top to bottom left to right
 * one level at a time
 * @param iteratorFunc
 */
BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
    let queue = [this];
    while (queue.length) {
        let treeNode = queue.shift();
        iteratorFunc(treeNode);
        if (treeNode.left) {
            queue.push(treeNode.left);
        }
        if (treeNode.right) {
            queue.push(treeNode.right);
        }
    }
};

//**************************************************
//              Get Smallest Value
//**************************************************
/**
 * Get smallest value
 * @returns {*}
 */
BST.prototype.getMinVal = function () {
    if (!this.left) {
        return this.value;
    } else {
        return this.left.getMinVal();
    }
};

//**************************************************
//              Get Largest Value
//**************************************************
/**
 * Get Largest Value
 * @returns {*}
 */
BST.prototype.getMaxVal = function () {
    if (!this.right) {
        return this.value;
    } else {
        return this.right.getMaxVal();
    }
};


//**************************************************
//                     TESTING
//**************************************************

let bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

//console.log(bst);
console.log(bst.right.left.left);
console.log(bst.left.right.left);
console.log(bst.left.left.left);
console.log(bst.right.right);

console.log(bst.contains(50));  //true
console.log(bst.contains(10));  //true
console.log(bst.contains(105));  //true
console.log(bst.contains(15));  //false

console.log('---------------------------------------------------');
bst.depthFirstTraversal(log, 'in-order');
console.log('---------------------------------------------------');
bst.depthFirstTraversal(log, 'pre-order');
console.log('---------------------------------------------------');
bst.depthFirstTraversal(log, 'post-order');

function log(value) {
    console.log(value);
}

console.log('---------------------------------------------------');
bst.breadthFirstTraversal(logNodeValue);

function logNodeValue(node) {
    console.log(node.value);
}

console.log('---------------------------------------------------');
console.log(bst.getMinVal());
console.log(bst.getMaxVal());








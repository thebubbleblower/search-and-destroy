'use strict';

//Complete this algo
const isLoop = (linkedlist) => {

    if(linkedlist.tail.next) return true
    console.log(linkedlist.head.value, linkedlist.tail.next);
    return false

};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
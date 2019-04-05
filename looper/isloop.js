'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let pointer = linkedlist.head
    let obj = {}
    while (pointer.next !== null){
        if (obj.hasOwnProperty(pointer.value)){
            return true
        }
        else {
            obj[pointer.value]=pointer.value;
            pointer = pointer.next
        }
    }
    return false

};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
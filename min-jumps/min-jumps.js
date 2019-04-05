'use strict';

// Complete this algo
const minJumps = arr => {
    let pointer = arr[0]
    let index = 0
    let steps = 0
    while (index <= arr.length-1) {
        if (pointer+index>=arr.length-1 ){
            steps++
            return steps
        }
        let counter = 0
        let largestnum = 0
        let nextstep = pointer
        for (let i = pointer; i>0; i--) {
            if (arr[index+i]-counter>largestnum){
                
                largestnum = arr[index+i]-counter
                nextstep = i
                console.log(nextstep)
            }
            counter++
        }
       
        steps++
        index = index+nextstep
        pointer = arr[index]
    }
    return steps

};

module.exports = minJumps
/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.

You may also use a list or array to represent a set.
*/

const powerSet = (yourArray) => {
  let output =[[]];
  let left;
  let right;
  let temp;
  for (k = yourArray.length, i = 0; i<yourArray.length; k--, i++) {
    //console.log('i/k = (', i, ', ',k, ' )')
    left = yourArray.slice(0,i)
    right = yourArray.slice(-k)
    //console.log('left: ', left, ', right: ', right)
    for (j = 0; j < right.length; j++) {
      temp = left.concat([right[j]])
      output.push(temp)
    }
  }
  return output;
}


// let test1 = [1,2,3,4,5]
// console.log(powerSet(test1))

$(document).ready(function() {
  $('#form1').submit(function(event) {
  event.preventDefault();
  let input1 = $('#input1').val();
  input1 = input1.replace(/'/g,'"')
  let input2 = JSON.parse(input1);
  console.log(input2)
  $('#output-section-1').text(JSON.stringify(powerSet(input2)));
  })
});

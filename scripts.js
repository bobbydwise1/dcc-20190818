/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.

You may also use a list or array to represent a set.
*/

const powerSet = (yourArray) => {
  let output =[[]]
  for (i = 0; i<yourArray.length; i++) {
    output.push(yourArray[i])
  }
  return output;
}


let test1 = [1,2,3]
console.log(powerSet(test1))


console.log()

$(document).ready(function() {
  $('#form1').submit(function(event) {
  event.preventDefault();
  let input1 = $('#input1').val();
  $('#output-section-1').text(input1);
  })
});

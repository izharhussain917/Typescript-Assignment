let places :string[] = [`Italy`, `Germany`, `agra`, `Eifel Tower`, `Times Square`];
// print your array in its original order.
console.log(places);
// print your array in alphabetical order without modifying the actual list.
console.log([...places].sort());
// show that your array is still in its original order without changing the order of the original list.
console.log([...places].sort().reverse());
// show that order array is still in its original order by printing it again.
console.log(places);
// Reverse the order of your list. print the array to show that its order has changed.
console.log(places.reverse());
// Reverse the order of your list again. print the list to show it's back to its original order.
console.log(places.reverse());
// sort your array so it's stored in alphabetical order. print that array to show that its order has been changed.
console.log(places.sort());
// sort to change your array so it's stored in reverse alphabetical order. print the list to show that its order has changed.
console.log(places.sort().reverse());


let Guest_List :string[] = [`Imran Khan`, `Nawaz Sharif`, `Asif Ali Zardari`];
let absent_Guest :string = `Imran Khan`;
let new_Guest :string = `Kamran Tessori`;
Guest_List[0] = new_Guest;

console.log(`Mr. ${absent_Guest} is not coming to the party`);
console.log(`Good News! we find big table so we are inviting 3 more guest.`)

Guest_List.unshift(`Sir Zia Khan`);
Guest_List.splice(2, 0, `Maryam Nawaz`);
Guest_List.push(`Bilawal Butto Zardari`);


while(Guest_List.length > 2) {
   let remove_Guest = Guest_List.pop();
 }

 Guest_List.splice(0, 2);

console.log(Guest_List);

console.log(`Total number of Guest Are: ${Guest_List.length}`);

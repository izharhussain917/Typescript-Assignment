let guest_list :string[] = [`Hammad`, `Huzaifa`, `Temoor`];
for(let i=0; i<guest_list.length; i++){
    console.log(`Dear Mr. ` + guest_list[i] + `,\n\nIt is our pleasure to invide you in our party.\n\nThank You!\n\n`)
}

let absent_guest :string = `Hammad`;
let new_guest :string = `Muhammad Anas`;
guest_list[0] = new_guest;

for(let i=0; i<guest_list.length; i++){
    console.log(`Dear Mr.` + guest_list[i] + `,\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n`)
}

console.log(`Mr. ${absent_guest} is not coming to the party.`);


console.log(`Good News! We find big table so we are inviting 3 more guests.`)

guest_list.unshift(`Sir zia khan`);
guest_list.splice(2 , 0 , `Huziafa`);
guest_list.push(`Sir Daniyal`);

for(let i=0; i<new_guest.length; i++){
    console.log(`Mr. ` + guest_list[i] + `,\n\nIt is our please to invite you to the party.`);
    console.log(`Good New! we find big table so we are inviting 3 more gursts.`)
}
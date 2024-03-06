let guest_list: string[] = [`Hammad`, `Huzaifa`, `Temoor`]
for(i=0; i<guest_list.length; i++){
    console.log(`Dear Mr. ` + guest_list[i] + `,\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n`)
}

let absent_guest :string = `Hammad`;
let new_guest :string = `Anas`;

guest_list[0] = new_guest ;

for(i=0; i<guest_list.length; i++){
    console.log(`Dear Mr. ` + guest_list[i] + `,\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n`)
}

console.log(`Mr. ${absent_guest} is not coming in PerformanceEntry.`)
let userName: string[] = [`Admin`, `Izhar`, `Hammad`, `Temoor`, `Tahir`];
userName.forEach(userName => {
    if (userName.toLocaleLowerCase()===`Admin`){
        console.log(`Hello ${userName}, would you like to see a status report ?`);
    } else {
        console.log(`Hello ${userName}, thank you for logging in again`);
    }
    
});
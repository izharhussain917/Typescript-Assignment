// List of current users
const currentUsers: string[] = ['john', 'alice', 'bob', 'jane', 'mike'];

// List of new users
const newUsers: string[] = ['jane', 'johnny', 'sara', 'MIKE', 'carol'];

// Function to check if a username is already in use
function isUsernameTaken(username: string): boolean {
  const lowerCaseUsername = username.toLowerCase();
  return currentUsers.includes(lowerCaseUsername);
}

// Loop through new users and check availability
for (let newUser of newUsers) 
    if (isUsernameTaken(newUser)) {
      console.log(`The username '${newUser}' is not available. Please enter a new username.`);
    } 
    
    else 
      {console.log(`The username '${newUser}' is available.`);}

const filePath = "../../public/data/users.json";
const fs = require("fs");

const dataService = {
  readFile: () => {
    const users = fetch('users.json')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data:', data)
      }).catch(
        error => console.log('Error reading data', error)
      );
      return users;
  },
  // readFile:()=>{},
};

export { dataService };

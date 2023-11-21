import * as fs from 'fs';

const filePath = '../../public/data/users.json';


const dataService = {
  readFile: () => {
    fs.readFile(filePath).then((data) => {
      console.log(data)
    }).catch((error)=>{
      console.log(error)
    })
  },
};

export { dataService };

const jsonfile = require("jsonfile");

const file = "../../data/users.json";

const dataService = async () => {
  const result = jsonfile.readFile(file, function (err, obj) {
      if (err) console.error(err);
      return obj;
  });
  return result;
};

export { dataService };

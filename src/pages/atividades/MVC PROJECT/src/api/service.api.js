//REQUISITOS 'fs' e 'uuid'
//npm install fs uuid
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const filePath = "../../data/users.json";

const userAPI = {
  getData: () => {
    // Função para baixar os dados do json
    try {
      const data = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error loading data from the file:", error);
      return [];
    }
  },
  writeData: (data) => {
    // Função subir novos dados ao json
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Error saving data to the file:", error);
    }
  },
  insertUser: (newUser) => {
    //Adicionar novo usuário
    const data = getData();
    newUser.id = uuidv4();
    data.push(newUser);
    this.writeData(data);
    return newUser;
  },
  updateUser: (userId, updatedUser) => {
    //Atualizar usuário
    const data = this.getData();
    const userIndex = data.findIndex((user) => user.id === userId);
    if (userIndex !== -1) {
      data[userIndex] = { ...data[userIndex], ...updatedUser };
      this.writeData(data);
      return data[userIndex];
    }
    return null;
  },
  deleteUser(login) {
    //Deletar usuário
    const data = this.getData();
    const filteredData = data.filter((user) => user.id !== userId);
    this.writeData(filteredData);
    return filteredData.length !== data.length;
  },
  findUserById(userId) {
    //Encontrar um usuário pelo ID
    const data = this.getData();
    return data.find((user) => user.id === userId);
  },
  searchUsers(criteria) {
    const data = this.getData();

    const results = data.filter((user) => {
      return (
        (criteria.nome ? user.nome.toLowerCase().includes(criteria.nome.toLowerCase()) : true) &&
        (criteria.idade ? user.idade === criteria.idade : true) &&
        (criteria.login ? user.login === criteria.login : true) &&
        (criteria.senha ? user.senha === criteria.senha : true)
      );
    });

    return results;
  }
};

export { userAPI };

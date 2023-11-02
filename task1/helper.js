const fs = require('fs');
const getAllUser = () =>{
  //TODO: Read file and return users here
  let users = fs.readFileSync("users.json","utf-8");
  let userdata = JSON.parse(users);
  return userdata;
  
};

const getFirstUser = () => {
  //TODO: get first user of list
  let users = fs.readFileSync("users.json","utf-8");
  let userdata = JSON.parse(users);
  let firstuser = userdata[0];
  return firstuser;
};

const getLast = () => {
  //TODO: get last user of list
  let users = fs.readFileSync("users.json","utf-8");
  let userdata = JSON.parse(users);
  let lastuser = userdata[userdata.length-1];
  return lastuser;
};

const getUserByID = (userID) => {
  //TODO: get user object by id
  let users = fs.readFileSync("users.json","utf-8");
  let userdata = JSON.parse(users);
  let userid = userdata[userID];
  return userid;
};

const getUserByCompanyName = ( companyName) => {
  //TODO: get user object by company name
  let users = fs.readFileSync("users.json","utf-8");
  let userdata = JSON.parse(users);
  const userCompany = userdata.filter(user => user.company.name === companyName);
  return userCompany;
};

const getUsersByCity = (city) => {
  //TODO: get users that live in this city
  let users = fs.readFileSync("users.json","utf-8");
  let userdata = JSON.parse(users);
  const userCity = userdata.filter(user => user.address.city === city);
  return userCity;
};

const getStreet = (userID) => {
  //TODO: get street name by userID
  let users = fs.readFileSync("users.json","utf-8");
  let userdata = JSON.parse(users);
  const userstreet = userdata.find(user => user.id === userID);
  return userstreet.address.street;
};

const addNewUser = (userObject) => {
  //TODO: add new user to the list
  let users = fs.readFileSync("users.json","utf-8");
  let userdata = JSON.parse(users);
  let jsonindex = userdata.findIndex(el => el.id === userdata.length);
  userdata.push(userObject);
  const updatedData = JSON.stringify(userdata, null, jsonindex + 1);
  fs.writeFileSync("users.json", updatedData, 'utf8');
  return userdata;
};


const updateUser = (userID,newemail) => {
  //TODO: update email when id === userID
  let users = fs.readFileSync("users.json","utf-8");
  let userdata = JSON.parse(users);
  const userchangeemail = userdata.find(user => user.id === userID);
  userchangeemail.email=newemail;
  const updatedData = JSON.stringify(userdata, null, userID + 1);
  fs.writeFileSync("users.json", updatedData, 'utf8');
  return userdata;
};

const deleteUserById = (userID) => {
  //TODO: remove user when id === userID
  let users = fs.readFileSync("users.json","utf-8");
  let userdata = JSON.parse(users);
  const usertodelete = userdata.findIndex(user => user.id === userID);
  userdata.splice(usertodelete, 1);
  const updatedData = JSON.stringify(userdata, null, userID - 1);
  fs.writeFileSync("users.json", updatedData, 'utf8');
  return userdata;
};

module.exports = {
  getAllUser,
  getFirstUser,
  getLast,
  getUserByID,
  getUserByCompanyName,
  getUsersByCity,
  getStreet,
  addNewUser,
  updateUser,
  deleteUserById,
};

const jwt = require('jsonwebtoken');

const userToken = (authorization, userId) => {
    const { data } = jwt.decode(authorization);
  
    const { id } = data.user[0];
  
    if (id !== userId) return 'Unauthorized user';
  
    return 'Authorized user';
};
const userIdToken = (authorization) => {
    const { data } = jwt.decode(authorization);
  
    const { id } = data.user[0];
  
    return id;
  };
  
module.exports = { userToken, userIdToken };
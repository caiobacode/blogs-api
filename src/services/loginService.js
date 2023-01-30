const login = async (obj) => {
  console.log(obj);
  return { type: 200, data: { token: 'asdasdasd' } };
};

module.exports = {
  login,
};
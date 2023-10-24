const { registerService, loginService } = require("../services/authService");

const register = async (req, res) => {
  const response = await registerService(req, res);
  return response;
};

const login = async (req, res) => {
  const response = await loginService(req, res);
  return response;
};

const authControllers = {
  register,
  login,
};

module.exports = authControllers;

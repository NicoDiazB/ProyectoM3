import axios from "axios";

const getAllUser = async () => {
  try {
    const allUser = await axios("http://localhost:3003/users");
    return allUser.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getUserById = async (id) => {
  try {
    const User = await axios(`http://localhost:3003/users/${Number(id)}`);
    return User.data;
  } catch (error) {
    console.log(error.message);
  }
};

const postUser = async (userData) => {
  try {
    const result = await axios.post(`http://localhost:3003/users/register`, {
      ...userData,
      dni: parseInt(userData.dni),
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async ({ username, password }) => {
  try {
    const result = await axios.post("http://localhost:3003/users/login", {
      username,
      password,
    });

    return result.data.id;
  } catch (error) {
    console.log(error);
  }
};

export { getAllUser, getUserById, postUser, loginUser };

const { REACT_APP_HOST: host } = process.env;

export const signUp = () => `${host}/api/auth/signup`;
export const signIn = () => `${host}/api/auth/signin`;
export const signOut = () => `${host}/api/auth/signout`;
export const checkAuth = () => `${host}/auth/check`;

export const getAllUsers = () => `${host}/users`;
export const editUser = (id) => `${host}/users/${id}`;
export const getUser = (id) => `${host}/users/${id}`;


//прописать корректные пути ручек

import User from '../models/user.model.js';

/**
 * Encuentra un usuario por su email.
 * @param {string} email - Email del usuario.
 * @returns {Promise<User|null>} Usuario si se encuentra, o null.
 */
export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

/**
 * Encuentra un usuario por su ID.
 * @param {string} id - ID del usuario.
 * @returns {Promise<User|null>} Usuario si se encuentra, o null.
 */
export const findUserById = async (id) => {
  return await User.findById(id);
};

/**
 * Crea un nuevo usuario.
 * @param {Object} userData - Datos del usuario (username, email, password).
 * @returns {Promise<User>} Usuario recién creado.
 */
export const createUser = async ({ username, email, password }) => {
  const user = new User({ username, email, password });
  return await user.save();
};

/**
 * Actualiza los datos de un usuario por su ID.
 * @param {string} id - ID del usuario a actualizar.
 * @param {Object} updates - Objeto con los campos y valores a actualizar.
 * @returns {Promise<User|null>} Usuario actualizado o null si no se encuentra.
 */
export const updateUserById = async (id, updates) => {
  return await User.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
};

/**
 * Elimina un usuario por su ID.
 * @param {string} id - ID del usuario a eliminar.
 * @returns {Promise<User|null>} Usuario eliminado o null si no se encuentra.
 */
export const deleteUserById = async (id) => {
  return await User.findByIdAndDelete(id);
};

export default {
  findUserByEmail,
  findUserById,
  createUser,
  updateUserById,
  deleteUserById
};

import Lamaran from "../Models/lamaranModel.js";

export const createLamaran = async (data) => {
  const lamaran = await Lamaran.create(data);
  return lamaran;
};

export const getAllLamaran = async () => {
  const lamaran = await Lamaran.findAll();
  return lamaran;
};

export const getLamaranById = async (idLamaran) => {
  const lamaran = await Lamaran.findByPk(idLamaran);
  return lamaran;
};

export const updateLamaran = async (idLamaran, data) => {
  const lamaran = await Lamaran.update(data, { where: { idLamaran } });
  return lamaran;
};

export const deleteLamaran = async (idLamaran) => {
  await Lamaran.destroy({ where: { idLamaran } });
};
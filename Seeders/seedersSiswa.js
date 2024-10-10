import Siswa from "../Models/siswaModel.js";

export const createSiswa = async (data) => {
  const siswa = await Siswa.create(data);
  return siswa;
};

export const getAllSiswa = async () => {
  const siswa = await Siswa.findAll();
  return siswa;
};

export const getSiswaById = async (NIM) => {
  const siswa = await Siswa.findByPk(NIM);
  return siswa;
};

export const updateSiswa = async (NIM, data) => {
  const siswa = await Siswa.update(data, { where: { NIM } });
  return siswa;
};

export const deleteSiswa = async (NIM) => {
  await Siswa.destroy({ where: { NIM } });
};

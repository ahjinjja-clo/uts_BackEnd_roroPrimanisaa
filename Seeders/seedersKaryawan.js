import Karyawan from "../Models/karyawanModel.js";

export const createKaryawan = async (data) => {
  const karyawan = await Karyawan.create(data);
  return karyawan;
};

export const getAllKaryawan = async () => {
  const karyawan = await Karyawan.findAll();
  return karyawan;
};

export const getKaryawanById = async (NIP) => {
  const karyawan = await Karyawan.findByPk(NIP);
  return karyawan;
};

export const updateKaryawan = async (NIP, data) => {
  const karyawan = await Karyawan.update(data, { where: { NIP } });
  return karyawan;
};

export const deleteKaryawan = async (NIP) => {
  await Karyawan.destroy({ where: { NIP } });
};
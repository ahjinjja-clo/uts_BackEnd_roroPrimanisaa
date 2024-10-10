import HR from "../Models/hrModel.js";

export const createHR = async (data) => {
  const hr = await HR.create(data);
  return hr;
};

export const getAllHRs = async () => {
  const hrs = await HR.findAll();
  return hrs;
};

export const getHRById = async (NIP) => {
  const hr = await HR.findByPk(NIP);
  return hr;
};

export const updateHR = async (NIP, data) => {
  const hr = await HR.update(data, { where: { NIP } });
  return hr;
};

export const deleteHR = async (NIP) => {
  await HR.destroy({ where: { NIP } });
};
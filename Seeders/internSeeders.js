import Intern from "../Models/internModel.js";

export const createIntern = async (data) => {
  const intern = await Intern.create(data);
  return intern;
};

export const getAllInterns = async () => {
  const interns = await Intern.findAll();
  return interns;
};

export const getInternById = async (idMagang) => {
  const intern = await Intern.findByPk(idMagang);
  return intern;
};

export const updateIntern = async (idMagang, data) => {
  const intern = await Intern.update(data, { where: { idMagang } });
  return intern;
};

export const deleteIntern = async (idMagang) => {
  await Intern.destroy({ where: { idMagang } });
};
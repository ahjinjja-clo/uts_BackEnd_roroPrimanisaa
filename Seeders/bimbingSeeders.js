import Pembimbing from "../Models/pembimbingModel.js";

export const createPembimbing = async (data) => {
  const pembimbing = await Pembimbing.create(data);
  return pembimbing;
};

export const getAllPembimbing = async () => {
  const pembimbing = await Pembimbing.findAll();
  return pembimbing;
};

export const getPembimbingById = async (idPembimbing) => {
  const pembimbing = await Pembimbing.findByPk(idPembimbing);
  return pembimbing;
};

export const updatePembimbing = async (idPembimbing, data) => {
  const pembimbing = await Pembimbing.update(data, {where:{idPembimbing}});
};

export const deletePembimbing = async(idPembimbing) =>{
    const pembimbing = await Pembimbing.destroy({where:{idPembimbing}});
}

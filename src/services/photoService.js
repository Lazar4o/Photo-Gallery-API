import { Photo } from '../models/index.js';

export const getAllPhotos = async (page, pageSize) => {
  const offset = (page - 1) * pageSize;
  const result = await Photo.findAndCountAll({
    limit: pageSize,
    offset: offset,
    order: [['createdAt', 'DESC']],
  });
  return result;
};

export const getSinglePhoto = async (id) => {
  const photo = await Photo.findByPk(id);
  if (!photo) throw new Error('Photo not found');
  return photo;
};

export const addPhoto = async (title, description, imageUrl) => {
  const photo = await Photo.create({ title, description, imageUrl });
  return photo;
};

export const modifyPhoto = async (id, title, description, imageUrl) => {
  const photo = await getSinglePhoto(id);
  photo.title = title;
  photo.description = description;
  photo.imageUrl = imageUrl;
  await photo.save();
  return photo;
};

export const removePhoto = async (id) => {
  const photo = await getSinglePhoto(id);
  await photo.destroy();
};

import * as photoService from "../services/photoService.js";
import cloudinary from "../config/cloudinaryConfig.js";
import { removeFile } from "../utils/fileUtils.js";

export const getPhotos = async (req, res) => {
  try {
    const { page = 1, pageSize = 6 } = req.query;
    const result = await photoService.getAllPhotos(
      parseInt(page),
      parseInt(pageSize)
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve photos" });
  }
};

export const getPhotoById = async (req, res) => {
  try {
    const { id } = req.params;
    const photo = await photoService.getSinglePhoto(id);
    res.json(photo);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve the photo" });
  }
};

export const createPhoto = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        public_id: `photo_${title}`,
        folder: "photo_gallery"
      });
      const imageUrl = result.url;
      const photo = await photoService.addPhoto(title, description, imageUrl);
      await removeFile(req.file.path);
      res.status(201).json(photo);
    } else {
      throw new Error("No image file provided");
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create photo", error: error.message });
  }
};

export const updatePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    let imageUrl;

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        public_id: `photo_${title}`,
        folder: "photo_gallery"
      });
      imageUrl = result.url;
      await removeFile(req.file.path);
    }

    const photo = await photoService.modifyPhoto(
      id,
      title,
      description,
      imageUrl
    );
    res.json(photo);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update photo", error: error.message });
  }
};

export const deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    await photoService.removePhoto(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Failed to delete photo" });
  }
};

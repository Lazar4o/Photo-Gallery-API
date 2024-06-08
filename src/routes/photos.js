import express from 'express';
import multer from 'multer';
import { getPhotos, getPhotoById, createPhoto, updatePhoto, deletePhoto } from '../controllers/photosController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', getPhotos);
router.get('/:id', getPhotoById);
router.post('/', upload.single('image'), createPhoto);
router.patch('/:id', upload.single('image'), updatePhoto);
router.delete('/:id', deletePhoto);

export default router;

import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET
// });

export const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'Funingo',
    allowedFormat: ['jpeg', 'png', 'jpg', 'pdf']
  }
});

export default {
  cloudinary,
  storage
};

import { v2 as cloudinary } from 'cloudinary';

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

if (cloudName === 'Root' || !cloudName) {
  console.warn('Cloudinary Error: Invalid Cloud Name detected in .env.local. Please replace "Root" with your actual Cloudinary Cloud Name.');
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

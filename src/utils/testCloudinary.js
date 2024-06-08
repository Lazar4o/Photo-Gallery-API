import cloudinary from "../config/cloudinaryConfig.js";

export const testCloudinary = async () => {
    try {
      const result = await cloudinary.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg", {
        public_id: "test_image"
      });
      console.log("Cloudinary test upload successful:", result.url);
    } catch (error) {
      console.error("Cloudinary test upload failed:", error);
    }
  };
import fs from 'fs/promises';

export const removeFile = async (filePath) => {
  try {
    await fs.unlink(filePath);
  } catch (err) {
    throw new Error(`Failed to delete file: ${filePath}`);
  }
};

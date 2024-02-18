import path from "path";
import Jimp from "jimp";
import fs from "fs";
import multer from "multer";
import User from "./user.schema.js";

const tempDir = path.join(process.cwd(), "temp");
const storeImg = path.join(process.cwd(), "public/avatars");

const storageMulter = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${req.user.id}${file.originalname}`);
  },
});

export const upload = multer({ storage: storageMulter });

export const updateAvatar = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    const tempUpdate = req.file.path;
    const originalName = path.extname(tempUpdate);
    const filename = `${req.user.id}_${originalName}`;
    const resultUpload = path.join(storeImg, filename);

    await fs.promises.rename(tempUpdate, resultUpload);

    const image = await Jimp.read(resultUpload);
    await image.resize(250, 250).writeAsync(resultUpload);

    const avatarURL = filename;
    await User.findByIdAndUpdate(req.user.id, { avatarURL });

    return res.status(200).json({ avatarURL });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred." });
  }
};

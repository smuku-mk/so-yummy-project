import Jimp from "jimp";
import fs from "fs";
import path from "path";
import User from "../../database/models/userSchema.js";

export const updateAvatar = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  const filename = `${req.user.id}_${path.extname(req.file.path)}`;
  const resultUpload = path.join(process.cwd(), "public/avatars", filename);

  await fs.promises.rename(req.file.path, resultUpload);
  await Jimp.read(resultUpload).then(image => image.resize(250, 250).writeAsync(resultUpload));

  await User.findByIdAndUpdate(req.user.id, { avatarURL: filename });

  return res.status(200).json({ avatarURL: filename });
};
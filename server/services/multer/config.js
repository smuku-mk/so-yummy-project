import multer from "multer";
import path from "path";


const tempDir = path.join(process.cwd(), "temp");


const storageMulter = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, tempDir);
    },
    filename: (req, file, cb) => {
      cb(null, `${req.user.id}${file.originalname}`);
    },
  });
  
export const upload = multer({ storage: storageMulter });

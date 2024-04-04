import multer from "multer";
import path from "path";
import fs from "fs";


const tempDir = path.join(process.cwd(), "temp");


if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

const storageMulter = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, tempDir);
    },
    filename: (req, file, cb) => {
      cb(null, `${req.user.id}${file.originalname}`);
    },
    onError : function(err, next) {
      console.log('error', err);
      next(err);
    }
  });
  
export const upload = multer({ storage: storageMulter });

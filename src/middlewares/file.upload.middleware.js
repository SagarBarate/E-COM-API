//1.import multer

import multer from "multer";

//2. Configuration storage with filename and locations
const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, './uploads/')
    },
    filename:(req,file, cb)=>{
        cb(null, new Date().toISOString()+file.originalname)
    }
});

export default  upload = multer({storage:storage})


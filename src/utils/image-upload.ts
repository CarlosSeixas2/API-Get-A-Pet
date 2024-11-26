import AppError from '../errors/app-error'
import multer from 'multer'
import path from 'path'

const imageStorage = multer.diskStorage({
  destination: (req, _file, cb) => {
    let folder: string = ''

    if (req.baseUrl.includes('users')) {
      folder = 'users'
    } else if (req.baseUrl.includes('pets')) {
      folder = 'pet'
    }

    cb(null, path.join(__dirname, `../public/images/${folder}`))
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  },
})

export const imageUpload = multer({
  storage: imageStorage,
  fileFilter(_req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new AppError('Please upload an image'))
    }
    cb(null, true)
  },
})

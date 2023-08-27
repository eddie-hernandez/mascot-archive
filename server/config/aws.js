const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

aws.config.update({
  accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_S3_BUCKET_REGION,
})

const s3 = new aws.S3()

const configureUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.REACT_APP_S3_BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname })
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '-' + file.originalname)
    },
    contentType: multerS3.AUTO_CONTENT_TYPE,
    contentDisposition: 'inline',
  }),
})

module.exports = configureUpload
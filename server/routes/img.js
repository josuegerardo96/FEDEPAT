const express = require('express')
const router =express.Router()
const imageModel  = require('../models/imgModel')
const fs = require("fs");

const { upload }  =require('../controllers/imgCrontroller')


router.post("/imgsave", upload.single("fedeimage"), (req, res) => {
    const saveImage =  imageModel({
      name: req.body.name,
      categoria: req.body.categoria,
      user: req.body.user,
      img: {
        data: fs.readFileSync("uploads/" + req.file.filename),
        contentType: "image/png",
      },
    });
    saveImage
      .save()
      .then((res) => {
        console.log("image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.status(200).json({saveImage})

  });


router.post('/imageget',async(req,res) =>{
  const {_id} = req.body
  const allData = await imageModel.find({user:_id})
  res.json(allData)
})

module.exports = router
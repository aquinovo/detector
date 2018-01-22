var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
const cv = require('opencv');
var router = express.Router();
home=path.resolve("."); 

/* GET users listing. */
router.get('/gaussiano', function(req, res) {
  const imagenes = home + "/public/imagenes/";	


  fs.readdirSync(imagenes).forEach(file => {
  	ruta = home + "/public/imagenes/" + file;
  	cv.readImage(ruta, function (err, img) {
		if (err) {
			throw err;
		}
		const width = img.width();
		const height = img.height();

		if (width < 1 || height < 1) {
			throw new Error('Image has no size');
		}
        
		img.save(home+ "/public/images/gaussiano/"+file);
	});
  })

  res.send('gaussiano realizado correctamente');
});

router.get('/media', function(req, res) {
  const imagenes = home + "/public/imagenes/";	


  fs.readdirSync(imagenes).forEach(file => {
  	ruta = home + "/public/imagenes/" + file;
  	cv.readImage(ruta, function (err, img) {
		if (err) {
			throw err;
		}
		const width = img.width();
		const height = img.height();

		if (width < 1 || height < 1) {
			throw new Error('Image has no size');
		}
        
		img.save(home+ "/public/images/media/"+file);
	});
  })

  res.send('media realizado correctamente');
});

module.exports = router;
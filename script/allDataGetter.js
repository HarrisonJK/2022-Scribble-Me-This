'use strict'
const quickDraw = require("quickdraw.js");

  //edit amount of pictures we want to train with here
  const amountOfPicturesTrain = 1000;
  //edit amount of pictures we want to test with here
  const amountOfPicturesTest = 0;
  //dimensions of the pictures
  const dimension = 28;

quickDraw.importAll((amountOfPicturesTest+amountOfPicturesTrain), dimension);
 
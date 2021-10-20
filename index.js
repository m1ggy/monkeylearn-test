const MonkeyLearn = require('monkeylearn');

const ml = new MonkeyLearn('your-key');

let model_id = 'cl_pi3C7JiL';
let data = [
  'This is a bad tool! no, This is a great product! but a sad merchandise',
];
ml.classifiers.classify(model_id, data).then((res) => {
  console.log(res.body[0].classifications);
});

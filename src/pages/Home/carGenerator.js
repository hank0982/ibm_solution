var Chance = require('chance');
const chance = new Chance();

const carDataGenerator = (dataNum) => {
  const data = {};
  const carBrand = ['Lexus', 'BMW', 'Jaguar', 'Jeep', 'Chevrolet', 'Mitsubishi', 'Mini', 'Land Rover', 'Tesla', 'Saab', 'Lamborghini']
  const carClass = ['Economy', 'Compact', 'Standard', 'Compact SUV', 'Intermediate', 'Full Size', 'Intermediate SUV']
  for(let i = 1; i < dataNum; i++){
    const randomBrand = carBrand[Math.floor(Math.random() * carBrand.length)];
    const randomClass = carClass[Math.floor(Math.random() * carBrand.length)];
    const price = chance.integer({min: 100000, max: 1000000})
    const randomCarName = `${randomBrand}-${chance.character({ alpha: true, casing: 'upper' })}${Math.floor(Math.random() * 1000)}`;
    data[randomCarName] = {
      price,
      className: randomClass,
      auth: Math.floor(Math.random() * 10) < 3 ? true : false,
      imagePath: "https://loremflickr.com/320/240/car,lexus,BMW,Jeep/all?random="+i,
      header: randomCarName,
      metaData: chance.date({string: true}),
      description: chance.sentence({ words: 3 }),
      salesPerson: chance.first() + chance.last(),
    }
  }
  return data;
}

var fs = require('fs');

var myData = carDataGenerator(51);

var outputFilename = '../carData.json';

fs.writeFile(outputFilename, JSON.stringify(myData), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
});
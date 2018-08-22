var Chance = require('chance');
const chance = new Chance();

const carDataGenerator = (dataNum) => {
  const data = [];
  const carBrand = ['Lexus', 'BMW', 'Jaguar', 'Jeep', 'Chevrolet', 'Mitsubishi', 'Mini', 'Land Rover', 'Tesla', 'Saab', 'Lamborghini']
  for(let i = 1; i < dataNum; i++){
    const randomCarName = carBrand[Math.floor(Math.random() * carBrand.length)];
    data.push({
      auth: Math.floor(Math.random() * 10) < 3 ? true : false,
      imagePath: "https://loremflickr.com/320/240/car,lexus,BMW,Jeep/all?random="+i,
      header: `${randomCarName}-${chance.character({ alpha: true, casing: 'upper' })}${Math.floor(Math.random() * 1000)}`,
      metaData: chance.date({string: true}),
      description: chance.sentence({ words: 3 }),
      salesPerson: chance.first() + chance.last(),
    })
  }
  return data;
}

var fs = require('fs');

var myData = carDataGenerator(51);

var outputFilename = './carData.json';

fs.writeFile(outputFilename, JSON.stringify(myData), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
});
var Chance = require('chance');
const chance = new Chance();

const mainTenanceRecord = (dataNum) =>{
  const vin = chance.cf()
  const carParts = ['Air Bag', 'Air Cleaner','Stabilizer Bar','Steering Column','Piston','Cylinder Head','Valve']
  const actions = ['Fix', 'Change']
  let records = []
  records.push({
    text: 'Car vin is ' + vin,
    action: 'Info'
  })
  for(let i = 1; i < dataNum; i++){
    const dice = chance.integer({min: 0, max: 10})
    if(dice != 0){
      const action = actions[chance.integer({min:0, max:1})]
      records.push(
        {
          text: `${action} ${carParts[chance.integer({min:0, max:6})]}`,
          action: action
        }
      )
    }else{
      records.push(
          {
            text: 'Transfer to ' + chance.name(),
            action: 'Transfer'
          }
        )
      }
    }
    return records
} 

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
      imagePath: "https://loremflickr.com/320/240/car,lexus,BMW,Jeep/all?lock="+i,
      header: randomCarName,
      metaData: chance.date({string: true}),
      description: chance.sentence({ words: 3 }),
      stars: chance.integer({max: 5, min: 0}),
      salesPerson: {
        name: `${chance.first()} ${chance.last()}`,
        address: `${chance.address()}`,
        phone: `${chance.phone()}`
      },
      mainTenanceRecord: mainTenanceRecord(chance.integer({min:1, max:10}))
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
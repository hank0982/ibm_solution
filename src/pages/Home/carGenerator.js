var Chance = require('chance');
const chance = new Chance();
const car_intro_dict = {
  'Saab':`This car is all new, representing the first full re-design of Saab's large sedan in 14 years. Measured by features, interior finish, space and smoothness, this 9-5 is the best Saab ever.
  The car is built to go head to head with the Audi A6, which offers similarly sized engines and front- or-all-wheel drive, like the 9-5. Other 2011 Saab 9-5 competitors include the BMW 5 Series, Mercedes E-Class, Lexus GS and ES, and Volvo S80. To a lesser extent, the 9-5 competes with more mainstream sedans like the Toyota Avalon, Ford Taurus and GM's closely related Buick LaCrosse.`,
  'Lexus':`PADDLE-SHIFT TRANSMISSIONS: Advanced paddle-shift transmissions put the exhilarating performance of the IS models at your fingertips., ALL-WHEEL DRIVE
  Standard on the IS 300 AWD and available on the IS 350, all-wheel drive helps provide enhanced traction and control., F SPORT PERFORMANCE Exclusive F SPORT features take the thrilling performance of the IS to the next level.`,
  'BMW': `originally an initialism for Bayerische Motoren Werke in German, or Bavarian Motor Works in English) is a German multinational company which currently produces luxury automobiles and motorcycles, and also produced aircraft engines until 1945. The company was founded in 1916 and has its headquarters in Munich, Bavaria. BMW produces motor vehicles in Germany, Brazil, China, India, South Africa, the United Kingdom, and the United States. In 2015, BMW was the world's twelfth largest producer of motor vehicles, with 2,279,503 vehicles produced.[2] The Quandt family are long-term shareholders of the company, with the remaining stocks owned by public float.`,
  'Jaguar': 
}
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
      imagePath: "https://loremflickr.com/320/240/small%20car/all?lock="+i,
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
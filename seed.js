const randomColor = require('randomcolor');
const fs = require('fs');

const list = randomColor({ count: 100 });
const swatches = { colors: [] }

const generateSwatch = (id, hex) => {
  return {
    "id": id,
    "hex": hex
  }
}

for (let i = 0; i < list.length; i++) {
  swatches.colors.push(generateSwatch(i, list[i]))
}

let data = JSON.stringify(swatches);

fs.writeFileSync('swatchData.json', data);
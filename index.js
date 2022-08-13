const fs = require('fs');
const { OBJtoXML, libraryParser } = require('./utils/OBJtoXML');

const stream = fs.createWriteStream('data.log', { flags: 'a' });

const logger = (message) => {
  const time = new Date();
  stream.write(`${time.toString()}: ${message}\n`);
};

// Exceptions handler
process.on('uncaughtException', (err) => {
  logger(err.message);
  stream.write('\n');
  stream.on('drain', function () {
    process.exit(1);
  });
});

function loadData() {
  const PATH = process.env.DATA_PATH;

  if (!PATH) {
    throw new Error('PATH environment value is not set');
  }

  const data = require(PATH);

  try {
    const outputFile = `./outputs/${new Date().toUTCString()}.xml`;
    const xml = OBJtoXML(data);
    fs.writeFileSync(outputFile, xml);
  } catch (error) {
    throw new Error(error.stack);
  }
}

function start() {
  loadData();
}

start();

const fs = require('fs');
const converter = require('json-2-csv');
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
    console.log('we are in');
    const time = new Date();
    throw new Error('PATH environment value is not set');
  }

  const data = require(PATH);
  const options = {
    delimiter: {
      wrap: '', // Double Quote (") character
      field: '|', // Comma field delimiter
      eol: '\n', // Newline delimiter
    },
  };

  const workingData = {
    key1: 'value1',
    key2: 'value2',
    key3: {
      subkey1: 'subVal1',
      subkey2: [
        { key1: 'val' },
        { key1: 'val' },
        { key1: 'val' },
        { key1: 'val' },
      ],
    },
  };
  console.log(typeof workingData);

  try {
    converter.json2csv(
      data.Entities,
      (err, csv) => {
        if (err) {
          throw err;
        }

        // print CSV string
        console.log(csv);
        fs.writeFileSync('output.csv', csv);
      },
      options
    );
  } catch (error) {
    throw new Error(error);
  }
}

function start() {
  loadData();
}

// const rawData = require();

start();

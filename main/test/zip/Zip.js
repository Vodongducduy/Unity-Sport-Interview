const fs = require('fs');
const zlib = require('zlib');

const data = fs.readFileSync('data.json', 'utf8');

const minifiedData = JSON.stringify(JSON.parse(data));

fs.writeFileSync('data.min.json', minifiedData);

const input = fs.createReadStream('data.min.json');

const output = fs.createWriteStream('data.min.json.gz');

input.pipe(zlib.createGzip()).pipe(output);

output.on('finish', () => {
  console.log('File đã được nén thành công và lưu dưới dạng data.min.json.gz');
});

import path from 'path';
import fs from 'fs';
const isClient = typeof document !== 'undefined';
let css;
if (!isClient) {
  css = fs.readFileSync(path.resolve(path.join(__dirname, '../../static/css/bootstrap.min.css')));
}
export default css;

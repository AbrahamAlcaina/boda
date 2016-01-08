import fs from 'fs';
import path from 'path';

export const loadCss = (assets) => {
  if (!assets) {
    return [];
  }
  const styles = [];
  for (const style in assets.styles) {
    if ({}.hasOwnProperty.call(assets.styles, style)) {
      styles.push(
        fs.readFileSync(path.join(__dirname, '../../static/dist/',
        path.basename(assets.styles[style])))
      );
    }
  }
  return styles;
};

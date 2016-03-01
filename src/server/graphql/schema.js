import Guest from '../guest';
import { getSchema } from '@risingstack/graffiti-mongoose';

const options = {
  mutations: true
};

export const schema = getSchema([Guest], options);

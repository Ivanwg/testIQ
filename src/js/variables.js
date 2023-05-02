import Navigo from 'navigo';
import { getById } from './utils/helpful';


export const root = getById('root');
export const router = new Navigo('/');

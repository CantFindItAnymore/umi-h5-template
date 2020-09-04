import request from '../utils/request';

export function getRandomImg() {
  return request('https://dog.ceo/api/breeds/image/random');
}

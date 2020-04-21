import {
  API,
  key
} from '@/services/api';

const language = 'en-US';
const include_adult = 'false';

export default {
  getConfiguration() {
    return API.get(`configuration?api_key=${key}`);
  },

  getItemInfo(id, type) {
    const url = `${type}/${id}?api_key=${key}&language=${language}`;
    return API.get(url);
  },
  getCast(id, type) {
    const url = `${type}/${id}/credits?api_key=${key}&language=${language}`;
    return API.get(url);
  },
  getTop(type) {
    const url = `${type}/top_rated?api_key=${key}&language=${language}&page=1`;
    return API.get(url);
  },
  getMoviesUpcoming(page) {
    const url = `movie/upcoming?api_key=${key}&language=${language}&page=${page}`;
    return API.get(url);
  },
  getMoviesLatest(page) {
    const url = `movie/latest?api_key=${key}&language=${language}&page=${page}`;
    return API.get(url);
  },
  getTvShowsOnAir(page) {
    const url = `tv/on_the_air?api_key=${key}&language=${language}&page=${page}`;
    return API.get(url);
  }

};
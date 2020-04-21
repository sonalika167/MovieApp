import axios from "axios";

export const key = "afa1d978dd157e52f0e3658e816c1856";
export const API = axios.create({
  baseURL: `https://api.themoviedb.org/3/`
});
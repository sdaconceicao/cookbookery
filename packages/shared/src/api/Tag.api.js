import axios from "axios";

import {convertObjectToQueryString} from './api.util';

export function getList(query){
    return axios.get(`/tags${query ? convertObjectToQueryString(query) : ''}`);
}

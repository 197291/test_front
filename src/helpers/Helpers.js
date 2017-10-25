import {URL_BASE} from '../constants/index';

export function empty (val) {
  return (typeof val === 'undefined' || val === '' || val === 0 || val === '0' || val === null
    || val === false || (typeof val === 'object' && !Object.keys(val).length) || (Array.isArray(val) && !val.length)
  )
}

export function apiUrl (path, params, absolut = false) {
  return URL_BASE + path
}
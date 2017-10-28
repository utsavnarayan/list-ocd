/**
 * Docs: https://dijs.github.io/wiki/index.html
 */

import wiki from 'wikijs';

export const getInfo = (keyword) => wiki().page(keyword).then(page => page.info());

export const getSummary = (keyword) => wiki().page(keyword).then(page => page.summary());

export const getImage = (keyword) => wiki().page(keyword).then(page => page.mainImage());

export const getImages = (keyword) => wiki().page(keyword).then(page => page.images());
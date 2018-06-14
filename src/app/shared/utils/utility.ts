import { orderBy } from 'lodash-es';

const findCategoryById = (categories, id) =>
  categories.find(data => data.id === id);
export const joinArrays = (arr1, arr2) =>
  arr1.map(a =>
    Object.assign({}, a, {
      category: findCategoryById(arr2, a.categoryId).name,
    }),
  );

export const orderItems = (items, propToSort: string, order: string = 'asc') =>
  orderBy(items, item => ('' + item[propToSort]).toLowerCase(), order);

import axios from 'axios'

export async function fetchProductsByCategory(
  categoryId,
  offset = 0,
  limit = 10,
  sortSting = 'popular'
) {
  try {
    const { data } = await axios.get(
      'http://auvix-back.bikdev.ru/api/v1/catalog/product/',
      {
        params: {
          limit,
          offset,
          sort: sortSting, // popular,new,price_cheap,price_exp
          filters: {
            category_id: [categoryId],
          },
        },
      }
    )
    return [null, data]
  } catch (err) {
    return [err, null]
  }
}

export async function fetchOptionsList() {
  try {
    const { data } = await axios.get(
      'http://auvix-back.bikdev.ru/api/v1/main/optins'
    )
    return [null, data]
  } catch (err) {
    return [err, null]
  }
}

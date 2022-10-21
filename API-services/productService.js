import axios from 'axios'

export async function fetchProductById(id) {
  try {
    const { data } = await axios.get(
      `http://auvix-back.bikdev.ru/api/v1/catalog/product/${id}`
    )
    return [null, data.data]
  } catch (err) {
    return [err, null]
  }
}

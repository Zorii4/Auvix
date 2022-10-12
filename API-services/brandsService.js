import axios from 'axios'

// TODO Переписать роуты в services на относительные пути

export async function fetchBrands() {
  try {
    const { data } = await axios.get(
      'http://auvix-back.bikdev.ru/api/v1/catalog/brand/'
    )
    return [null, data.data]
  } catch (err) {
    return [err, null]
  }
}

export async function fetchBrandById(id) {
  try {
    const { data } = await axios.get(
      'http://auvix-back.bikdev.ru/api/v1/catalog/brand/'
    )
    const brand = data.data.find((el) => el.id === id)
    return [null, brand]
  } catch (err) {
    return [err, null]
  }
}

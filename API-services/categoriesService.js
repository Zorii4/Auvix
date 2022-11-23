import axios from 'axios'

// TODO Переписать роуты в services на относительные пути

export async function fetchCategories() {
  try {
    const { data } = await axios.get(
      'http://auvix-back.bikdev.ru/api/v1/catalog/category'
    )
    return [null, data.data]
  } catch (err) {
    return [err, null]
  }
}

export async function fetchCategoryById(slugOrId) {
  try {
    const { data } = await axios.get(
      `http://auvix-back.bikdev.ru/api/v1/catalog/category/${slugOrId}`
    )
    return [null, data.data]
  } catch (err) {
    return [err, null]
  }
}

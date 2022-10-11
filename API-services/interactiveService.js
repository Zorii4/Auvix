import axios from 'axios'

const axiosClient = axios.create ({
  baseURL:'http://auvix-back.bikdev.ru/api/v1/interactive-content/extract'
})

export async function getData(id) {
  try {
    const { data } = await axiosClient.get(`/${id}`)
    return [data]
  } catch (err) {
    return [err]
  }
}
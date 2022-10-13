import axios from 'axios'

const axiosClient = axios.create ({
  baseURL:'http://auvix-back.bikdev.ru/api/v1/modal-pages'
})

export async function getPage(url) {
  try {
    const { data } = await axiosClient.get(`?uri=${url}`)
    return [data]
  } catch (err) {
    return [err]
  }
}
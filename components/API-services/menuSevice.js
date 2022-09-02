import axios from 'axios'

const axiosClient = axios.create ({
  baseURL:'http://auvix-back.bikdev.ru/api/v1/modal-pages'
})

export async function getMenu() {
  try {
    const { data } = await axiosClient.get('/get-menu')
    return [data]
  } catch (err) {
    return [err]
  }
}
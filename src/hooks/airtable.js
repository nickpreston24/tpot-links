import axios from 'axios'
import { devmode, Log } from '../helpers'

const apiKey = import.meta.env.VITE_VERCEL_AIRTABLE_API_KEY
const baseKey = import.meta.env.VITE_VERCEL_BASE_KEY

export const formatRecords = (records = []) => {
  let collection = [].concat(records)

  const format = (record) => {
    if (!record) return {}
    let { id, fields } = record
    return {
      id,
      ...fields
    }
  }

  let result =
    collection.length > 0 ? collection.map(format) : format(collection)

  return result
}

export const getRecords = async (tableName, maxRecords = 10) => {
  const result = await axios({
    url: `https://api.airtable.com/v0/${baseKey}/${tableName}?maxRecords=${maxRecords}`,
    headers: {
      'Content-Type': 'x-www-form-urlencoded',
      Authorization: `Bearer ${apiKey}`
    }
  })

  return formatRecords(result?.data?.records)
}

export const searchTable = async (tableName = null, fields = []) => {
  if (!tableName) throw Error(`tableName cannot be null or empty`)
  let url = `https://api.airtable.com/v0/${baseKey}/${tableName}?`
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i]
    if (i > 0) {
      url.concat(`&`)
    }
    url.concat(`fields%5B%5D=${field}`)
  }

  devmode && console.log('airtable search url :>> ', url)
  const result = await axios({
    url,
    headers: {
      'Content-Type': 'x-www-form-urlencoded',
      Authorization: `Bearer ${apiKey}`
    }
  })

  let raw = formatRecords(result?.data?.records)
  return raw
}

export const getById = async (id, tableName = null) => {
  if (!id) throw Error(`id cannot be null or zero`)
  if (!tableName) throw Error(`tableName cannot be null or empty`)

  let record = await get(tableName, id)

  Log('record :>> ', record)

  return formatRecords(record)
}

export const patch = async (tableName = null, data = null) => {
  if (!tableName) throw Error(`tableName cannot be null or empty`)

  // soft fail
  if (!data) return []

  const url = `https://api.airtable.com/v0/${baseKey}/${tableName}`
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
  const result = await axios.patch(url, data, headers)

  return formatRecords(result?.data?.records)
}

export const create = async (tableName = null, record) => {
  if (!record) return -1
  if (!tableName) throw Error(`tableName cannot be null or empty`)

  console.log('record', record)
  const data = {
    records: [
      {
        fields: record?.fields || { ...record }
      }
    ]
  }

  let url = 'https://api.airtable.com/v0/' + baseKey + '/' + tableName
  let axiosConfig = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
      'Content-Type': 'application/json'
    }
  }
  const response = await axios.post(url, data, axiosConfig)

  devmode && console.log('response?.data', response?.data)
  // TODO: return id
  return response?.data?.id
}

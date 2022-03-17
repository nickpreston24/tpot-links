import axios from 'axios'
import { Log } from '../helpers'

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

export const searchTable = async (
  tableName = 'Parts',
  options = { fields: [] }
) => {
  // Log('options :>> ', options)
  let url = `https://api.airtable.com/v0/${baseKey}/${tableName}?`
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i]
    if (i > 0) {
      url.concat(`&`)
    }
    url.concat(`fields%5B%5D=${field}`)
  }

  // Log('url', url)
  axios({
    url,
    headers: {
      'Content-Type': 'x-www-form-urlencoded',
      Authorization: `Bearer ${apiKey}`
    }
  }).then((result) => {
    // Log(result)
    let raw = formatRecords(result?.data?.records)
  })
}

export const getById = async (id, table = null) => {
  if (!table) return 'Table cannot be null!'

  let record = await get(table, id)

  Log('record :>> ', record)

  return formatRecords(record)
}

export const patch = async (table = null, data = null) => {
  const url = `https://api.airtable.com/v0/${baseKey}/${table}`
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
  const result = await axios.patch(url, data, headers)

  return formatRecords(result?.data?.records)
}

export const create = async (table = null, record) => {
  console.log('record', record)
  const data = {
    records: [
      {
        fields: record?.fields || { ...record }
      }
    ]
  }

  let url = 'https://api.airtable.com/v0/' + baseKey + '/' + table
  let axiosConfig = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
      'Content-Type': 'application/json'
    }
  }
  const response = await axios.post(url, data, axiosConfig)

  // console.log('axios response', response)
  // TODO: return id
  return response?.data?.id
}

import axios from 'axios'
const apiKey = import.meta.env.VITE_VERCEL_AIRTABLE_API_KEY
const baseKey = import.meta.env.VITE_VERCEL_BASE_KEY
const bearer_token = import.meta.env.VITE_VERCEL_AIRTABLE_BEARER_TOKEN
export const base_api_url = `https://api.airtable.com/v0/${baseKey}/`
const devmode = import.meta.env.NODE_ENV === 'development'
console.log('devmode :>> ', devmode)

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
    url: `${base_api_url}${tableName}?maxRecords=${maxRecords}`,
    headers: {
      'Content-Type': 'x-www-form-urlencoded',
      Authorization: `Bearer ${apiKey}`
    }
  })

  return formatRecords(result?.data?.records)
}

export const searchTable = async (tableName = null, fields = []) => {
  if (!tableName) throw Error(`tableName cannot be null or empty`)
  let url = `${base_api_url}${tableName}?`
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i]
    if (i > 0) {
      url.concat(`&`)
    }
    url.concat(`fields%5B%5D=${field}`)
  }

  console.log('airtable search url :>> ', url)
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

export const getById = async (tableName = null, id = null) => {
  if (!id) throw Error(`id cannot be null or zero`)
  if (!tableName) throw Error(`tableName cannot be null or empty`)

  let record = await get(tableName, id)

  return formatRecords(record)
}

export const patch = async (tableName = null, records = []) => {
  if (!tableName) throw Error(`tableName cannot be null or empty`)
  // if (!record) throw Error(`record cannot be empty`);

  console.log('records received', records)
  // let id = record.id;
  // console.log("id", id);
  // console.log("record", { ...record });

  let formattedRecords = records.map((r) => {
    const { id, ...rest } = r
    return {
      id,
      fields: { ...rest }
    }
  })

  console.log('records to patch :>> ', formattedRecords)
  const data = {
    records: formattedRecords
    // [
    // {
    //   id: "reczhLAjJHszwLZc6",
    //   fields: {
    //     Name: "Make a 10 year plan!",
    //     Status: "Todo",
    //     Points: 5,
    //   },
    // },
    // {
    //   id: "recUT5TOy3Pd0WEW5",
    //   fields: {
    //     Name: "Sweet Caroline",
    //     Notes: "good times",
    //     Status: "Todo",
    //     Points: 1,
    //   },
    // },
    // {
    //   id: "recqbekj0nyFEyrZq",
    //   fields: {
    //     Name: "Exceed Expectations",
    //     Notes: "...",
    //     Status: "Todo",
    //     Points: 3,
    //   },
    // },
    // ],
  }

  console.log('data patch :>> ', data)

  const url = `${base_api_url}${tableName}`
  let axiosConfig = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
      'Content-Type': 'application/json'
    }
  }

  console.log('url', url)
  console.log('data', data)
  const result = await axios.patch(url, data, axiosConfig)

  return formatRecords(result?.data?.records)
}

export const create = async (tableName = null, record) => {
  if (!record) throw Error(`record cannot be empty`)
  if (!tableName) throw Error(`tableName cannot be null or empty`)

  // console.log("record", record);
  const data = {
    records: [
      {
        fields: record?.fields || { ...record }
      }
    ]
  }

  let url = `${base_api_url}${tableName}`
  let axiosConfig = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
      'Content-Type': 'application/json'
    }
  }
  const response = await axios.post(url, data, axiosConfig)

  console.log('response?.data', response?.data)
  return response
}

export const deleteRecord = async (tableName = null, id = null) => {
  if (!id) throw new Error(`id for record cannot be null!`)
  let url = `${base_api_url}${tableName}/${id}`
  console.log('url', url)
  let axiosConfig = {
    headers: {
      Authorization: 'Bearer ' + apiKey,
      'Content-Type': 'application/json'
    }
  }
  const response = await axios.delete(url, axiosConfig)

  return response
}

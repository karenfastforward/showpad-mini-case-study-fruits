import { values, set, del } from 'idb-keyval'

import { Client } from './types'
import { errorHandler } from '../error'

// READ
export const readClients = async (): Promise<Client[]> => {
  try {
    const data = await values<Client>()
    return data
  } catch (error) {
    errorHandler(error)
    return []
  }
}

// UPDATE
export const updateClient = async (client: Client): Promise<void> => {
  try {
    await set(client.id, client)
  } catch (error) {
    errorHandler(error)
  }
}

// DELETE
export const deleteClient = async (client: Client): Promise<void> => {
  try {
    await del(client.id)
  } catch (error) {
    errorHandler(error)
  }
}

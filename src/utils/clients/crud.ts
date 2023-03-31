import { Showpad } from '@showpad/experience-app-sdk'
import { v4 as uuidv4 } from 'uuid'
import { values, set, del } from 'idb-keyval'

import { Client } from './types'
import { errorHandler } from '../error'

const displaySuccessToast = (text: string): Promise<Showpad.ToastReason> =>
  Showpad.displayToast({
    type: 'success',
    text,
    actionText: 'dismiss',
  });

// READ
export const readClients = async (): Promise<Client[]> => {
  try {
    // const data = await values<Client>()
    const clientStore = await Showpad.getStoreEntries<Client>("Client-Store")
    const data = [] //fix typescript formatting
    clientStore.forEach(async(clientInfo) => {
      const client = <Client> clientInfo.value
      console.log(clientStore)
      data.push({
        id: client.id,
        name: client.name,
        fruits: client.fruits,
      })
    })
    console.log(data)
    return data
  } catch (error) {
    errorHandler(error)
    return []
  }
}

// UPDATE
export const updateClient = async (client: Client): Promise<void> => {
  type ThisType = Showpad.Scalar & Client;

  const clientInfo: ThisType = {
    id: client.id,
    name: client.name,
    fruits: client.fruits
  }
  try {
    // await set(client.id, client)
    await Showpad.setStoreEntryValue("Client-Store", client.id, clientInfo)
  } catch (error) {
    errorHandler(error)
  }
}

// DELETE
export const deleteClient = async (client: Client): Promise<void> => {
  try {
    // await del(client.id)
    await Showpad.deleteStoreEntry("Client-Store", client.id);
    displaySuccessToast('Deleted User Entry');
  } catch (error) {
    errorHandler(error)
  }
}

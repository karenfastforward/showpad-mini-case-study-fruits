import { Showpad } from '@showpad/experience-app-sdk'
import { Client } from './types'

const displaySuccessToast = (text: string): Promise<Showpad.ToastReason> =>
  Showpad.displayToast({
    type: 'success',
    text,
    actionText: 'dismiss',
  });

// READ
export const readClients = async (): Promise<Client[]> => {
  try {
    const clientStore = await Showpad.getStoreEntries<Showpad.ToScalar<Client>>("Client-Store")
    const data: Client[] = []
    clientStore.forEach(async(clientInfo) => {
      const client = <Client> clientInfo.value
      data.push({
        id: client.id,
        name: client.name,
        fruits: client.fruits,
      })
    })
    return data
  } catch (error) {
    Showpad.handleErrorWithToast(error);
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
    await Showpad.setStoreEntryValue("Client-Store", client.id, clientInfo)
  } catch (error) {
    Showpad.handleErrorWithToast(error);
  }
}

// DELETE
export const deleteClient = async (client: Client): Promise<void> => {
  try {
    await Showpad.deleteStoreEntry("Client-Store", client.id);
    displaySuccessToast('Deleted User Entry');
  } catch (error) {
    Showpad.handleErrorWithToast(error);
  }
}

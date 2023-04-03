import { Showpad } from '@showpad/experience-app-sdk'
import { createPDF } from './utils'
import { Client } from '../clients'

export const openPDF = async (assetSlug: string): Promise<void> => {
  try {
    await Showpad.openAssetViewer(assetSlug)
  } catch(error) {
    Showpad.handleErrorWithToast(error);
  }
}

export const sharePDF = async (client: Client): Promise<void> => {
  try {
    const file = await createPDF(client)
    const filename = `${client.name}.pdf`
  
    const uploadData: Showpad.UploadData = {
      file,
      filename
    };
  
    const emitter = await Showpad.upload(uploadData)
  
    emitter.on('queued', async () => {
      console.log('queued')
    })
  
    emitter.on('uploading', (result: Showpad.UploadProgress) => {
      console.log(result)
    })
  
    emitter.on('processing', () => {
      console.log('processing')
    })
  
    emitter.on('success', ({ asset: result }: { asset: Showpad.Asset }) => {
      console.log(result)
    })
  
    emitter.on('failed', (result: Showpad.UploadError) => {
      console.log(result)
    })
  } catch (error) {
    Showpad.handleErrorWithToast(error);
  }
}
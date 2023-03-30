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
  const pdf = await createPDF(client)
  const pdfUrl = URL.createObjectURL(pdf)

  openPDF(pdfUrl)
}

import { createPDF } from './utils'
import { Client } from '../clients'

export const openPDF = (pdfUrl: string): void => {
  const pdfLink = document.createElement('a')
  pdfLink.href = pdfUrl
  pdfLink.target = '_blank'

  pdfLink.style.display = 'hidden'
  document.body.appendChild(pdfLink)

  pdfLink.click()
  pdfLink.remove()
}

export const sharePDF = async (client: Client): Promise<void> => {
  const pdf = await createPDF(client)
  const pdfUrl = URL.createObjectURL(pdf)

  openPDF(pdfUrl)
}

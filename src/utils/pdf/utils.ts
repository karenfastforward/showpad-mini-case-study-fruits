import { Showpad } from '@showpad/experience-app-sdk'
import { PDFDocument, PDFPage } from 'pdf-lib'

import { Client } from '../clients'

let lineY = 0

const createPDFLine = (page: PDFPage, text: string, size: number) => {
  page.drawText(text, {
    x: 50,
    y: lineY,
    size,
  })

  lineY -= size + 10
}
export const createPDF = async (client: Client): Promise<Blob> => {
  const pdfDocument = await PDFDocument.create()
  const pdfPage = pdfDocument.addPage()

  lineY = pdfPage.getSize().height - 50

  createPDFLine(pdfPage, client.name, 18)
  lineY -= 20

  Object.entries(client.fruits).forEach(([key, value]) => {
    if (value) createPDFLine(pdfPage, key, 12)
  })

  const pdfBytes = await pdfDocument.save()
  const file = new Blob([pdfBytes], { type: 'application/pdf' })

  return file
}

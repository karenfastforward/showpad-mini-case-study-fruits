import { FRUIT_PDFS } from './const'

import { FruitPDF } from './types'
import { errorHandler } from '../error'

export const readFruitPDFs = async (): Promise<FruitPDF[]> => {
  try {
    return FRUIT_PDFS
  } catch (error) {
    errorHandler(error)
    return []
  }
}

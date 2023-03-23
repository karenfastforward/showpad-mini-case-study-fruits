import { fruits } from './const'

export type Fruit = typeof fruits[number]

export interface FruitPDF {
  name: Fruit
  fileUrl: string
  previewUrl: string
}

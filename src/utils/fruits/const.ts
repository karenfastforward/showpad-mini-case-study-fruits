import { Showpad } from '@showpad/experience-app-sdk'
// import { FruitPDF } from './types'

export const fruits = [
  'Blueberries',
  'Cranberries',
  'Pomegranates',
  'Grapes',
] as const

interface Config extends Showpad.EnrichedConfigJSON {
  contents: {
    fruit: Showpad.ContentAssetTags
  }
}

const { assets: fruitAssets } = await Showpad.parseEnrichedConfig<Config>()

console.log(fruitAssets)

export const FRUIT_PDFS = fruitAssets

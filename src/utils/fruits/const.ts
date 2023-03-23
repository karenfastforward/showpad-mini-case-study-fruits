import { Showpad } from '@showpad/experience-app-sdk'

// import { FruitPDF } from './types'

// import BlueBerriesFile from '../../assets/PDFs/BlueBerries.pdf'
// import BlueBerriesPreview from '../../assets/PDFs/BlueBerries.png'

// import CranberriesFile from '../../assets/PDFs/Cranberries.pdf'
// import CranberriesPreview from '../../assets/PDFs/Cranberries.png'

// import PomegranatesFile from '../../assets/PDFs/Pomegranates.pdf'
// import PomegranatesPreview from '../../assets/PDFs/Pomegranates.png'

// import GrapesFile from '../../assets/PDFs/Grapes.pdf'
// import GrapesPreview from '../../assets/PDFs/Grapes.png'

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
// export const FRUIT_PDFS: FruitPDF[] = [] = fruitPdfAssets.map((asset) => {
//   return {
//     name: asset.displayName,
//     fileUrl: '',
//     previewUrl: await 
//   }
// })

// export const FRUIT_PDFS: FruitPDF[] = [
//   {
//     name: 'Blueberries',
//     fileUrl: BlueBerriesFile,
//     previewUrl: BlueBerriesPreview,
//   },
//   {
//     name: 'Cranberries',
//     fileUrl: CranberriesFile,
//     previewUrl: CranberriesPreview,
//   },
//   {
//     name: 'Pomegranates',
//     fileUrl: PomegranatesFile,
//     previewUrl: PomegranatesPreview,
//   },
//   {
//     name: 'Grapes',
//     fileUrl: GrapesFile,
//     previewUrl: GrapesPreview,
//   },
// ]

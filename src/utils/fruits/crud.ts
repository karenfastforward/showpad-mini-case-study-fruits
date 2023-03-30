import { Showpad } from '@showpad/experience-app-sdk'
import { FruitPDF } from './types'
import { errorHandler } from '../error'
import { Fruit } from './types'

export const readFruitPDFs = async (): Promise<FruitPDF[]> => {
  interface Config extends Showpad.EnrichedConfigJSON {
    contents: {
      fruit: Showpad.ContentAssetTags
    }
  }
  try {
    const { assets: fruitAssets } = await Showpad.parseEnrichedConfig<Config>()
    console.log(fruitAssets)
    const FRUIT_PDFS = []
    for (const asset in fruitAssets) {
      console.log(fruitAssets[asset].displayName)
      let fruitName = <Fruit> fruitAssets[asset].displayName
      FRUIT_PDFS.push(
        {
          name: fruitName,
          fileUrl: fruitAssets[asset].fileUrl,
          previewUrl: fruitAssets[asset].previewUrl,
          slug: fruitAssets[asset].slug
        }
      )
    }
    console.log(FRUIT_PDFS)
    return FRUIT_PDFS
  } catch (error) {
    errorHandler(error)
    return []
  }
}

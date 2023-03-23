import { v4 as uuidv4 } from 'uuid'

import { Client } from './types'

export const CLIENT_DEFAULT = (): Client => ({
  id: uuidv4(),
  name: '',
  fruits: {
    Blueberries: false,
    Cranberries: false,
    Grapes: false,
    Pomegranates: false,
  },
})

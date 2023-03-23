import { Fruit } from '../fruits'

export interface Client {
  id: string
  name: string
  fruits: Record<Fruit, boolean>
}

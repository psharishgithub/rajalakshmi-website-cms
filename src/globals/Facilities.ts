import { GlobalConfig } from 'payload'
import { globalAccess } from '../access'
import { createGlobalPageConfig } from './shared/globalConfig'

export const Facilities: GlobalConfig = {
  ...createGlobalPageConfig('facilities', 'Facilities'),
  access: globalAccess,
}

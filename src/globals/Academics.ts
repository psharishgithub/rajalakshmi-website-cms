import { GlobalConfig } from 'payload'
import { globalAccess } from '../access'
import { createGlobalPageConfig } from './shared/globalConfig'

export const Academics: GlobalConfig = {
  ...createGlobalPageConfig('academics', 'Academics'),
  access: globalAccess,
}

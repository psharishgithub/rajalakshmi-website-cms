import { GlobalConfig } from 'payload'
import { globalAccess } from '../access'
import { createGlobalPageConfig } from './shared/globalConfig'

export const Placement: GlobalConfig = {
  ...createGlobalPageConfig('placement', 'Placement'),
  access: globalAccess,
}

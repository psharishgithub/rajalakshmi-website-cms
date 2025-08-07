import { GlobalConfig } from 'payload'
import { globalAccess } from '../access'
import { createGlobalPageConfig } from './shared/globalConfig'

export const Regulations: GlobalConfig = {
  ...createGlobalPageConfig('regulations', 'Regulations'),
  access: globalAccess,
}

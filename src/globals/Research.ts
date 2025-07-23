import { GlobalConfig } from 'payload'
import { globalAccess } from '../access'
import { createGlobalPageConfig } from './shared/globalConfig'

export const Research: GlobalConfig = {
  ...createGlobalPageConfig('research', 'Research'),
  access: globalAccess,
}

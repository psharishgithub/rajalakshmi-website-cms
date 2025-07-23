import { GlobalConfig } from 'payload'
import { globalAccess } from '../access'
import { createGlobalPageConfig } from './shared/globalConfig'

export const About: GlobalConfig = {
  ...createGlobalPageConfig('about', 'About'),
  access: globalAccess,
}

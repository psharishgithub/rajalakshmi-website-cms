import { GlobalConfig } from 'payload'
import { globalAccess } from '../access'
import { createGlobalPageConfig } from './shared/globalConfig'

export const Admissions: GlobalConfig = {
  ...createGlobalPageConfig('admissions', 'Admissions'),
  access: globalAccess,
}

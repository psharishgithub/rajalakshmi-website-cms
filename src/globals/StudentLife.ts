import { GlobalConfig } from 'payload'
import { globalAccess } from '../access'
import { createGlobalPageConfig } from './shared/globalConfig'

export const StudentLife: GlobalConfig = {
  ...createGlobalPageConfig('student-life', 'Student Life'),
  access: globalAccess,
}

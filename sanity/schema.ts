import { type SchemaTypeDefinition } from 'sanity'

import hero from './schemas/hero'
import service from './schemas/service'
import testimonial from './schemas/testimonial'
import companyInfo from './schemas/companyInfo'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [hero, service, testimonial, companyInfo],
}

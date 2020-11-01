import { CollectionStructureFieldResponseDataType } from './collection-structure-field-response.data-type.directus'

export interface CollectionStructureResponseDataType {
  collection: string;
  fields: CollectionStructureFieldResponseDataType[];
  hidden: boolean;
  icon?: string;
  managed: boolean;
  note?: string;
  single: boolean;
  translation?: {
    locale: string,
    newItem: boolean,
    translation: string,
  }[];
}
import { CollectionStructureFieldResponseDataType } from './collection-structure-field-response.data-type.directus'

export interface CollectionResponseDataType {
  collection: string;
  fieldsAndValues: Map<string, any>;
}
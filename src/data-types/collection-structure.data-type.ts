import { CollectionStructureField } from '../models/collection-structure-field.model';

export interface CollectionStructureDataType {
  collection: string;
  fields: Map<string, CollectionStructureField>;
  hidden: boolean;
  note?: string;
  single: boolean;
  translation?: {
    locale: string,
    newItem: boolean,
    translation: string,
  }[];
}
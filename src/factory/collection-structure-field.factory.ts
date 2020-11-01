import { CollectionStructureFieldDataType } from '../data-types/collection-structure-field.data-type';
import { CollectionStructureField } from '../models/collection-structure-field.model';

export class CollectionStructureFieldFactory {
  static getCollectionStructureFieldInstanceFrom(data: CollectionStructureFieldDataType)
    : CollectionStructureField {
    return new CollectionStructureField(data);
  }
}
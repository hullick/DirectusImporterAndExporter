import { CollectionStructureResponseDataType } from '../data-types/directus/collection-structure-response.data-type.directus';
import { CollectionStructureField } from '../models/collection-structure-field.model';
import { CollectionStructure } from '../models/collection-structure.model';
import { CollectionStructureFieldFactory } from './collection-structure-field.factory';

export class CollectionStructureFactory {
  static getCollectionStructureInstanceFrom(data: CollectionStructureResponseDataType)
    : CollectionStructure {
    const directusFields = new Map<string, CollectionStructureField>();

    for (const fieldName in data.fields) {
      directusFields.set(
        fieldName,
        CollectionStructureFieldFactory.getCollectionStructureFieldInstanceFrom(
          data.fields[fieldName],
        ),
      );
    }

    return new CollectionStructure({
      collection: data.collection,
      fields: directusFields,
      hidden: data.hidden,
      single: data.single,
      translation: data.translation,
      note: data.note,
    });
  }
}
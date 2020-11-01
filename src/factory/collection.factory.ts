import { CollectionDataType } from '../data-types/collection.data-type';
import { Collection } from '../models/collection.model';

export class CollectionFactory {
  static getCollectionInstanceFrom(data: Object): Collection {
    const queriedFieldsAndValues = new Map<string, any>();

    Object.keys((data as any).attributesAndValues).forEach((key) => {
      queriedFieldsAndValues.set(key, ((data as any).attributesAndValues as any)[key]);
    });

    return new Collection({
      structureName: (data as any).collection,
      attributesAndValues: queriedFieldsAndValues,
    });
  }
}
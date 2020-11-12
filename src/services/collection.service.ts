import { CollectionStructureResponseDataType } from '../data-types/directus/collection-structure-response.data-type.directus';
import { CollectionStructureFactory } from '../factory/collection-structure.factory';
import { CollectionFactory } from '../factory/collection.factory';
import { CollectionStructure } from '../models/collection-structure.model';
import { Collection } from '../models/collection.model';
import { Service } from './service';

export abstract class CollectionService {
  static listCollectionStructures(
    extraHeaders?: Object
  ): Promise<CollectionStructure[]> {
    return Service.doRequest('GET', 'collections', undefined, extraHeaders).then((response) => {
      return response.data.data.map(
        (collectionStructureDataType: CollectionStructureResponseDataType) => {
          return CollectionStructureFactory.getCollectionStructureInstanceFrom(
            collectionStructureDataType,
          );
        });
    });
  }

  static listCollectionData(collectionName: string, extraHeaders?: Object): Promise<Collection[]> {
    return Service.doRequest('GET', `items/${collectionName}`, undefined, extraHeaders).then((response) => {
      return response.data.data.map((resultCollectionData: Object) => {
        return CollectionFactory.getCollectionInstanceFrom({
          collection: collectionName,
          collectionData: resultCollectionData,
        });
      });
    });
  }
}
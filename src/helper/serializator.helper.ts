import { UserFactory } from '../factory/user.factory';
import { Collection } from '../models/collection.model';
import { User } from '../models/user.model';
import { CaseConverter } from './case-converter.helper';

export abstract class SerializatorHelper {
  static serialize(object: Object, unique: Boolean = false): void {
    const objectClassName = (<any>object).constructor.name;

    if (unique) {
      sessionStorage.setItem(
        CaseConverter.toSnakeCase(objectClassName),
        JSON.stringify([object]),
      );
    } else {
      const allItems = SerializatorHelper.deserializeAll(object.constructor);
      allItems.push(object);

      sessionStorage.setItem(
        CaseConverter.toSnakeCase(objectClassName),
        JSON.stringify(allItems),
      );
    }
  }

  static deserialize(id: Number, objectPrototype: Function): Object | undefined {
    const allItems: any[] = JSON.parse(
      sessionStorage.getItem(CaseConverter.toSnakeCase(objectPrototype.name)) || '[]'
    );

    let foundedInstance = undefined;

    allItems.forEach((currentItem) => {
      if (CaseConverter.toSnakeCase(objectPrototype.name) == 'user') {
        if (currentItem.data.id == id) {
          foundedInstance = UserFactory.getUserInstanceFrom({
            user: currentItem.data,
            token: currentItem.data.token,
          });

          return false;
        }
      }
    });

    return foundedInstance;
  }

  static deserializeUnique(objectPrototype: Function): Object {
    return JSON.parse(sessionStorage.getItem(CaseConverter.toSnakeCase(objectPrototype.name)) || '[]')[0];
  }

  static deserializeAll(objectPrototype: Function): Object[] {
    return JSON.parse(sessionStorage.getItem(CaseConverter.toSnakeCase(objectPrototype.name)) || '[]');
  }
}
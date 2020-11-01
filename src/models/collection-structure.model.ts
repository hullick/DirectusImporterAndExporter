import { CollectionStructureDataType } from '../data-types/collection-structure.data-type';
import { ISerializable } from '../interfaces/iserializable';
import { CollectionStructureField } from './collection-structure-field.model';

export class CollectionStructure implements ISerializable {
  private data: CollectionStructureDataType = {
    collection: '',
    fields: new Map<string, CollectionStructureField>(),
    hidden: false,
    single: false,
  };

  constructor(data: CollectionStructureDataType) {
    this.data.collection = data.collection;
    this.data.hidden = data.hidden;
    this.data.single = data.single;
    this.data.fields = data.fields;
  }

  public get collection(): string {
    return this.data.collection;
  }

  public set collection(v: string) {
    this.data.collection = v;
  }

  public get hidden(): boolean {
    return this.data.hidden;
  }

  public set hidden(v: boolean) {
    this.data.hidden = v;
  }

  public get single(): boolean {
    return this.data.single;
  }

  public set single(v: boolean) {
    this.data.single = v;
  }

  public get fields(): Map<string, any> {
    return this.data.fields;
  }

  toJson(): ISerializable {
    throw new Error('Method not implemented.');
  }
}
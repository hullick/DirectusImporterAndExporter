import { CollectionDataType } from "../data-types/collection.data-type";
import { ISerializable } from "../interfaces/iserializable";

export class Collection implements ISerializable {
  private data: CollectionDataType = {
    structureName: '',
    attributesAndValues: new Map<string, any>(),
  };

  constructor(data: CollectionDataType) {
    this.data.structureName = data.structureName;
    this.data.attributesAndValues = data.attributesAndValues;
  }

  get structureName(): string {
    return this.data.structureName;
  }

  set structureName(structureNameValue: string) {
    this.data.structureName = structureNameValue;
  }

  get attributesAndValues(): Map<string, any> {
    return this.data.attributesAndValues;
  }

  set attributesAndValues(attributesAndValues: Map<string, any>) {
    this.data.attributesAndValues = attributesAndValues;
  }

  toJson(): ISerializable {
    throw new Error("Method not implemented.");
  }
}
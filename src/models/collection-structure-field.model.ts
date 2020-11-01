import { CollectionStructureFieldDataType } from '../data-types/collection-structure-field.data-type';
import { ISerializable } from '../interfaces/iserializable';

export class CollectionStructureField implements ISerializable {
  private data: CollectionStructureFieldDataType = {
    field: '',
  };

  constructor(data: CollectionStructureFieldDataType) {
    this.data.default_value = data.default_value;
    this.data.field = data.field;
    this.data.id = data.id;
    this.data.length = data.length;
    this.data.note = data.note;
    this.data.readonly = data.readonly;
    this.data.required = data.required;
    this.data.signed = data.signed;
    this.data.sort = data.sort;
    this.data.translation = data.translation;
    this.data.type = data.type;
    this.data.unique = data.unique;
  }

  public get defaultValue(): string {
    return this.data.default_value;
  }

  public set defaultValue(v: string) {
    this.data.default_value = v;
  }

  public get field(): string {
    return this.data.field;
  }

  public set field(v: string) {
    this.data.field = v;
  }

  public get id(): number | undefined {
    return this.data.id;
  }

  public set id(v: number | undefined) {
    this.data.id = v;
  }

  public get length(): number | undefined {
    return this.data.length;
  }

  public set length(v: number | undefined) {
    this.data.length = v;
  }

  public get note(): string | undefined {
    return this.data.note;
  }

  public set note(v: string | undefined) {
    this.data.note = v;
  }

  public get readonly(): boolean | undefined {
    return this.data.readonly;
  }

  public set readonly(v: boolean | undefined) {
    this.data.readonly = v;
  }

  public get required(): boolean | undefined {
    return this.data.required;
  }

  public set required(v: boolean | undefined) {
    this.data.required = v;
  }

  public get signed(): boolean | undefined {
    return this.data.signed;
  }

  public set signed(v: boolean | undefined) {
    this.data.signed = v;
  }

  public get sort(): number | undefined {
    return this.data.sort;
  }

  public set sort(v: number | undefined) {
    this.data.sort = v;
  }

  public get type(): string | undefined {
    return this.data.type;
  }

  public set type(v: string | undefined) {
    this.data.type = v;
  }

  public get unique(): boolean | undefined {
    return this.data.unique;
  }

  public set unique(v: boolean | undefined) {
    this.data.unique = v;
  }

  public get translations(): {
    newItem: boolean,
    locale: string,
    translation: string,
  }[] | undefined {
    return this.data.translation;
  }

  toJson(): ISerializable {
    throw new Error('Method not implemented.');
  }
}
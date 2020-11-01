export interface CollectionStructureFieldResponseDataType {
  auto_increment: boolean;
  collection: string;
  datatype: string;
  default_value: any;
  field: string;
  group: number;
  hidden_browse: boolean;
  hidden_detail: boolean;
  id: number;
  interface: string;
  length: number;
  locked: boolean;
  note: string;
  options: object;
  primary_key: boolean;
  readonly: boolean;
  required: boolean;
  signed: boolean;
  sort: number;
  translation: {
    newItem: boolean,
    locale: string,
    translation: string,
  }[];
  type: string;
  unique: boolean;
  validation: RegExp;
  width: string;
}
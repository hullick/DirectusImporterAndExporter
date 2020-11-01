export interface CollectionStructureFieldDataType {
  datatype?: string;
  default_value?: any;
  field: string;
  id?: number;
  length?: number;
  note?: string;
  readonly?: boolean;
  required?: boolean;
  signed?: boolean;
  sort?: number;
  translation?: {
    newItem: boolean,
    locale: string,
    translation: string,
  }[];
  type?: string;
  unique?: boolean;
}
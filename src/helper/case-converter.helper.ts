export abstract class CaseConverter {
  static toSnakeCase(value: string): string {
    return String(value)
      .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
      .replace(/([a-z])([A-Z])/g, (m, a, b) => `${a}_${b.toLowerCase()}`)
      .replace(/[^A-Za-z0-9]+|_+/g, '_')
      .toLowerCase();
  }

  static toCamelCase(value: string): string {
    return String(value)
      .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
      .replace(/[^A-Za-z0-9]+/g, '$')
      .replace(/([a-z])([A-Z])/g, (m, a, b) => `${a}$${b}`)
      .toLowerCase()
      .replace(/(\$)(\w)/g, (m, a, b) => b.toUpperCase());
  }

  static toPascalCase(value: string): string {
    return String(value)
      .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '$')
      .replace(/[^A-Za-z0-9]+/g, '$')
      .replace(/([a-z])([A-Z])/g, (m, a, b) => `${a}$${b}`)
      .toLowerCase()
      .replace(/(\$)(\w?)/g, (m, a, b) => b.toUpperCase());
  }

  static toDotCase(value: string): string {
    return String(value)
      .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
      .replace(/([a-z])([A-Z])/g, (m, a, b) => `${a}_${b.toLowerCase()}`)
      .replace(/[^A-Za-z0-9]+|_+/g, '.')
      .toLowerCase();
  }

  static toPathCase(value: string): string {
    return String(value)
      .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
      .replace(/([a-z])([A-Z])/g, (m, a, b) => `${a}_${b.toLowerCase()}`)
      .replace(/[^A-Za-z0-9]+|_+/g, '/')
      .toLowerCase();
  }

  static toHeaderCase(value: string): string {
    return String(value)
      .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
      .replace(/([a-z])([A-Z])/g, (m, a, b) => `${a}_${b.toLowerCase()}`)
      .replace(/[^A-Za-z0-9]+|_+/g, ' ')
      .toLowerCase()
      .replace(/( ?)(\w+)( ?)/g, (m, a, b, c) => a + b.charAt(0).toUpperCase() + b.slice(1) + c);
  }

  static toTextCase(value: string): string {
    const textcase = String(value)
      .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
      .replace(/([a-z])([A-Z])/g, (m, a, b) => `${a}_${b.toLowerCase()}`)
      .replace(/[^A-Za-z0-9]+|_+/g, ' ')
      .toLowerCase();
    return textcase.charAt(0).toUpperCase() + textcase.slice(1);
  }

}
export type Item = Readonly<
  Partial<{
    id: number;
    name: string;
    description: string;
    categoryId: number;
    price: number;
  }>
>;

export namespace ItemBuilder {
  export function build({
    id = 0,
    name = '',
    description = '',
    categoryId = 0,
    price = 0,
  }): Item {
    return {
      id,
      name,
      description,
      categoryId,
      price,
    };
  }
}

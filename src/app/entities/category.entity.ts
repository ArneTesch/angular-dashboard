export type Category = Readonly<
  Partial<{
    id: number;
    name: string;
  }>
>;

export namespace CategoryBuilder {
  export function build({ id = 0, name = '' }): Category {
    return {
      id,
      name,
    };
  }
}

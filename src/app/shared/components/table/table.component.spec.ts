import { TableComponent } from './table.component';

describe('component: FormDropdownComponent', () => {
  let component: TableComponent;

  beforeEach(() => {
    component = new TableComponent();
  });

  describe('sort', () => {
    it('should sort the items on the provided property ascending or descending', () => {
      const items = [{ prop: 'b' }, { prop: 'a' }, { prop: 'c' }];
      component.items = items;
      component.order = 'desc';

      component.sort('prop');

      expect(component.items).toEqual([
        { prop: 'a' },
        { prop: 'b' },
        { prop: 'c' },
      ]);

      component.sort('prop');

      expect(component.items).toEqual([
        { prop: 'c' },
        { prop: 'b' },
        { prop: 'a' },
      ]);
    });
  });
});

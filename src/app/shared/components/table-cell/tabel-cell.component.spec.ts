import { TableCellComponent } from './table-cell.component';

describe('component SimpleTableCellComponent', () => {
  let component: TableCellComponent;
  let viewcontainerRefMock;
  let componentFactoryResolverMock;

  beforeEach(() => {
    viewcontainerRefMock = {
      clear: jest.fn(),
      createComponent: jest.fn(),
    };
    componentFactoryResolverMock = {
      resolveComponentFactory: jest.fn(),
    };

    component = new TableCellComponent(
      viewcontainerRefMock,
      componentFactoryResolverMock,
    );
  });

  describe('on ngOnChanges', () => {
    it('should initialize the toShow string in case of string type', () => {
      component.type = 'string';
      component.item = { test: 'value' };
      component.property = 'test';

      component.ngOnChanges();

      expect(component.toShow).toBe('value');
    });

    it('should dynamically load the component passed in case of type component', () => {
      component.type = 'component';
      component.item = 'data';
      const componentFactory = {};
      componentFactoryResolverMock.resolveComponentFactory.mockReturnValue(
        componentFactory,
      );
      const componentInstance = { data: '' };
      viewcontainerRefMock.createComponent.mockReturnValue({
        instance: componentInstance,
      });

      component.ngOnChanges();

      expect(viewcontainerRefMock.clear).toHaveBeenCalled();
      expect(viewcontainerRefMock.createComponent).toHaveBeenCalled();
      expect(componentInstance.data).toBe('data');
    });

    it('should throw an error if type is unknown', () => {
      component.type = 'unknown';

      expect(() => component.ngOnChanges()).toThrowError(
        'unknown type received',
      );
    });
  });
});

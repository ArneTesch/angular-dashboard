import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnChanges,
  Type,
  ViewContainerRef,
} from '@angular/core';

export interface CellRendererComponent<T> {
  data: T;
}

@Component({
  selector: 'app-table-cell',
  template: `
    {{toShow}}
  `,
})
export class TableCellComponent implements OnChanges {
  @Input() item: any;
  @Input() property: string;
  @Input() type: string | any;
  @Input() component: Type<CellRendererComponent<any>>;

  toShow: string;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnChanges() {
    if (this.type) {
      switch (this.type) {
        case 'string':
          this.toShow = this.item[this.property];
          return;
        case 'component':
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            this.component,
          );

          this.viewContainerRef.clear();

          const componentRef = this.viewContainerRef.createComponent(
            componentFactory,
          );
          componentRef.instance.data = this.item;
          return;
        default:
          throw new Error('unknown type received!');
      }
    }
  }
}

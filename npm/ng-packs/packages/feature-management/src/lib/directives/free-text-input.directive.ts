import { Directive, HostBinding, Input } from '@angular/core';
import { IStringValueType } from 'packages/feature-management/proxy/src/lib/proxy/validation/string-values';

// TODO: improve this type
export interface FreeTextType {
  valueType: IStringValueType
}

export const INPUT_TYPES = {
  numeric: 'number',
  default: 'text',
};

@Directive({
  standalone: true,
  selector: 'input[abpFeatureManagementFreeText]',
  exportAs: 'inputAbpFeatureManagementFreeText',
})
export class FreeTextInputDirective {
  _feature: FreeTextType;
  // eslint-disable-next-line @angular-eslint/no-input-rename

  @Input('abpFeatureManagementFreeText') set feature(val: FreeTextType) {
    this._feature = val;
    this.setInputType();
  }

  get feature() {
    return this._feature;
  }

  @HostBinding('type') type: string;

  private setInputType() {
    const valueType = this._feature?.valueType;
    if (valueType !== undefined) {
      const validatorType = this.feature?.valueType?.validator?.name.toLowerCase();
      this.type = INPUT_TYPES[validatorType] ?? INPUT_TYPES.default;
    }
    this.type = INPUT_TYPES.default;
  }
}

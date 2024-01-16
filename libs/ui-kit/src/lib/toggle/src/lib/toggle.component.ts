import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';
import {
	ControlValueAccessor,
	NG_VALIDATORS,
	NG_VALUE_ACCESSOR,
	ValidationErrors,
} from '@angular/forms';

@Component({
	selector: 'eui-toggle',
	template: `
		<div
			class="eui-toggle"
			[ngClass]="[
				disabled ? 'eui-toggle__disabled' : '',
				size === 'md' ? 'eui-toggle__md' : 'eui-toggle__sm'
			]"
			(click)="clickHandler()">
			<input
				class="eui-toggle-input"
				type="checkbox"
				[checked]="checked"
				[disabled]="disabled" />
			<label class="eui-toggle-label" *ngIf="label">{{ label }}</label>
		</div>
	`,
	styleUrls: ['./toggle.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: ToggleComponent,
		},
		{
			provide: NG_VALIDATORS,
			multi: true,
			useExisting: ToggleComponent,
		},
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleComponent implements ControlValueAccessor {
	@Input() label = '';
	@Input() size = 'sm';
	@Input() disabled = false;
	@Output() disabledChange = new EventEmitter();
	@Input() checked = false;
	@Output() checkedChange = new EventEmitter();

	// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
	onChange = (value: unknown | unknown[]) => {};
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onTouched = () => {};
	touched = false;

	clickHandler() {
		this.markAsTouched();

		if (!this.disabled) {
			this.checked = !this.checked;
			this.checkedChange.emit(this.checked);
			this.onChange(this.checked);
		}
	}

	writeValue(checked: boolean) {
		this.checked = checked;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	registerOnChange(onChange: any) {
		this.onChange = onChange;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	registerOnTouched(onTouched: any) {
		this.onTouched = onTouched;
	}

	markAsTouched() {
		if (!this.touched) {
			this.onTouched();
			this.touched = true;
		}
	}

	setDisabledState(disabled: boolean) {
		this.disabled = disabled;
	}

	validate(): ValidationErrors | null {
		return null;
	}
}

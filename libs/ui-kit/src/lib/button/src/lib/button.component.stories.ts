import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta } from '@storybook/angular';

import { ButtonModule } from './button.module';

import { ButtonColor, ButtonSize } from './types/button.model';

@Component({
	selector: 'nx-storybook-test-2-button-template',
	template: `
		<button euiButton [color]="color" [size]="size" [disabled]="disabled">

			{{ label }}
		</button>
	`,
	imports: [CommonModule, ButtonModule],
	standalone: true,
})
export class ButtonTemplateComponent {
	@Input() color: ButtonColor = 'primary';
	@Input() size: ButtonSize = 'md';
	@Input() label = '';
	@Input() disabled = false;
	@Input() icon = false;
}

const meta: Meta<ButtonTemplateComponent> = {
	title: 'Buttons/Button',
	component: ButtonTemplateComponent,
	argTypes: {
		label: {
			control: 'text',
		},
		disabled: {
			control: 'boolean',
		},
		icon: {
			control: 'boolean',
		},
		size: {
			control: 'inline-radio',
			options: ['md', 'sm'],
		},
	},
	args: {
		color: 'primary',
		size: 'md',
		disabled: false,
		icon: false,
		label: 'button text',
	},
};

export default meta;

export const Primary = {
	args: {
		color: 'primary',
		size: 'md',
		label: 'primary',
	},
};

export const Secondary = {
	args: {
		color: 'secondary',
		size: 'md',
		label: 'secondary',
	},
};

export const Error = {
	args: {
		color: 'error',
		size: 'md',
		label: 'error',
	},
};

export const Fade = {
	args: {
		color: 'fade',
		size: 'md',
		label: 'fade',
	},
};

export const Transparent = {
	args: {
		color: 'transparent',
		size: 'md',
		label: 'transparent',
	},
};

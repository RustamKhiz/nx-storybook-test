import { Meta } from '@storybook/angular';
import { ToggleComponent } from './toggle.component';

const meta: Meta<ToggleComponent> = {
	title: 'Controls/Choice/Toggle',
	component: ToggleComponent,
	tags: ['autodocs'],
	render: (args: ToggleComponent) => {
		const { label, size, disabled, checked, ...props } = args;
		return {
			props,
			template: `
			<eui-toggle
				[label]="'${label}'"	
				[size]="'${size}'"
				[disabled]="${disabled}"
				[checked]="${checked}"
			>
			</eui-toggle>
		  `,
		};
	},
	argTypes: {
		size: {
			control: 'inline-radio',
			options: ['sm', 'md'],
		},
		label: {
			control: 'text',
		},
		disabled: {
			control: 'boolean',
		},
		checked: {
			control: 'boolean',
		},
	},
	args: {
		label: 'label',
		disabled: false,
		checked: false,
	},
};

export default meta;

export const Default = {
	args: {},
};

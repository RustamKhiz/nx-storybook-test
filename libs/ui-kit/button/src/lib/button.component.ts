import {
	ChangeDetectionStrategy,
	Component,
	Input,
	ElementRef,
	Renderer2,
} from '@angular/core';
import { ButtonColor, ButtonSize } from './types/button.model';

@Component({
	selector: `eui-button, button[euiButton], a[euiButton]`,
	template: '<ng-content></ng-content>',
	styleUrls: ['./button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
	@Input()
	set color(color: ButtonColor) {
		this.renderer.addClass(this.hostElement.nativeElement, `eui-btn__${color}`);
	}

	@Input() set size(size: ButtonSize) {
		this.renderer.addClass(this.hostElement.nativeElement, `eui-btn__${size}`);
	}

	constructor(private renderer: Renderer2, private hostElement: ElementRef) {}
}

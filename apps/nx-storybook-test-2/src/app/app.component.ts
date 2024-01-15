import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ButtonModule } from '@nx-storybook-test-2/button'
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ButtonModule],
  selector: 'nx-storybook-test-2-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-storybook-test-2';
}

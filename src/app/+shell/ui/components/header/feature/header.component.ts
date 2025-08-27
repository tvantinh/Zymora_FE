import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PortalHostDirective } from "../../../../../../../node_modules/@angular/cdk/portal/index";
@Component({
  selector: 'meu-header',
  standalone: true,
  imports: [CommonModule, PortalHostDirective],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {}
}

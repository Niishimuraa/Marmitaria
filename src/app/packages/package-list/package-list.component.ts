import { Component } from '@angular/core';
import { PackageItemComponent } from "./package-item/package-item.component";

@Component({
  selector: 'app-package-list',
  standalone: true,
  imports: [PackageItemComponent],
  templateUrl: './package-list.component.html',
  styleUrl: './package-list.component.css'
})
export class PackageListComponent {

}

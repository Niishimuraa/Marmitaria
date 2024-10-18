import { Component, OnInit } from '@angular/core';
import { PackageItemComponent } from "./package-item/package-item.component";
import { Package } from './package.model';

@Component({
  selector: 'app-package-list',
  standalone: true,
  imports: [PackageItemComponent],
  templateUrl: './package-list.component.html',
  styleUrl: './package-list.component.css'
})
export class PackageListComponent implements OnInit{
  packages: Package[] = [
    new Package('Churrasco', 'Churrasco de picanha', 'https://www.ogastronomo.com.br/upload/2051998133-churrasco-uma-paixao-nacional.jpg')
  ];
  
  constructor() {}

  ngOnInit(): void {
    
  }
}

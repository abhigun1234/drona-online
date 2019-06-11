import { Component, OnInit,ViewChild } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {MatMenuTrigger} from '@angular/material/menu';
@Component({
  selector: 'app-dronahome',
  templateUrl: './dronahome.component.html',
  styleUrls: ['./dronahome.component.css']
})
export class DronahomeComponent implements OnInit {
  @ViewChild('clickHoverMenuTrigger') clickHoverMenuTrigger: MatMenuTrigger;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'logo',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/imgages/logo.jpg'));
  }

  ngOnInit() {
  }
  openOnMouseOver() {
    this.clickHoverMenuTrigger.openMenu();
  }
}

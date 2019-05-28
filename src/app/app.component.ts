import { Component, OnInit } from '@angular/core';
import { VersionCheckService } from './service/version-check.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'automaticReloadAfterDeployement';
  constructor(private versionCheck: VersionCheckService) {}
  ngOnInit() {
    this.versionCheck.initVersionCheck('../../dist/version.json');
  }
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OcCommonLibModule} from 'oc-ng-common-component';
import {ConfirmationModalComponent} from './modals/confirmation-modal/confirmation-modal.component';
import {CamelCaseToNormalPipe} from './pipes/camel-case-to-normal.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppConfirmationModalComponent} from './modals/app-confirmation-modal/app-confirmation-modal.component';
import {PermissionDirective} from './directive/permission.directive';

@NgModule({
  declarations: [
    ConfirmationModalComponent,
    AppConfirmationModalComponent,
    ConfirmationModalComponent,
    CamelCaseToNormalPipe,
    PermissionDirective,
  ],
  imports: [
    CommonModule,
    OcCommonLibModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    OcCommonLibModule,
    CamelCaseToNormalPipe,
    FormsModule,
    ReactiveFormsModule,
    PermissionDirective
  ]
})
export class SharedModule { }

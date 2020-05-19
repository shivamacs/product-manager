import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatInputModule,
  MatToolbarModule, MatIconModule, MatProgressSpinnerModule, MatTabsModule, MatListModule, MatDividerModule, MatSliderModule
} from '@angular/material';
@NgModule({
  imports: [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatListModule,
  MatDividerModule,
  MatSliderModule
  ],
  exports: [
  CommonModule,
   MatToolbarModule,
   MatButtonModule,
   MatCardModule,
   MatInputModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatTabsModule,
   MatListModule,
   MatDividerModule,
   MatSliderModule
   ],
})
export class CustomMaterialModule {}

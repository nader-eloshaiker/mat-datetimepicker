import { registerLocaleData } from "@angular/common";
import localeEn from "@angular/common/locales/en";
import {
  LOCALE_ID,
  NgModule
} from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MAT_DATE_LOCALE } from "@angular/material/core";
import { AppComponent } from "./app.component";
import { AppMomentModule } from "./moment/moment.module";
import { AppNativeModule } from "./native/native.module";

registerLocaleData(localeEn);

@NgModule({
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "au-EN"
    },
    {
      provide: MAT_DATE_LOCALE,
      useExisting: LOCALE_ID
    }
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppMomentModule,
    AppNativeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

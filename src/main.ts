import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideComponentStore } from '@ngrx/component-store';

import { environment } from './environments/environment';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app-routes';
import { TranslateConfig } from './app/utils/translate-config';
import { InputDateStore } from './app/services/input-date.store/input-date.store.index';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideComponentStore(InputDateStore),
    provideRouter(appRoutes, withComponentInputBinding()),
    importProvidersFrom([
      TranslateModule.forRoot(TranslateConfig.customTranslateConfig),
      BrowserAnimationsModule,
    ]),
    {
      provide: TranslateConfig.TRANSLATE_FILES_LOADER,
      useValue: [TranslateConfig.FilesPathsEnum.InputDate],
    },
  ],
});

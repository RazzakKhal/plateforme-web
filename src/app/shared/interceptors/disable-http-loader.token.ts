import { HttpContextToken } from '@angular/common/http';

export const DISABLE_HTTP_LOADER = new HttpContextToken<boolean>(() => false);

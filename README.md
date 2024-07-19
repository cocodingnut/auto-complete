# AutoComplete

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Note：
Jul 18 Pair Coding: 
Angular 17, 
```typescript
import { provideHttpClient, withFetch } from '@angular/common/http';

providers: [
  provideHttpClient(withFetch())
]
```
When you use withFetch(), Angular’s HttpClient is configured to use the Fetch API instead of XHR. 
The Fetch API is a more modern alternative that offers several advantages over XHR, 
such as better support for streaming responses, a more powerful and flexible request/response structure, 
and a simpler and more readable syntax for making requests.

Cors Problem Fix(Path Rewrite), 
PrimeNG(`importProvidersFrom(BrowserAnimationsModule)`), 
@OutPut(), EventEmitter


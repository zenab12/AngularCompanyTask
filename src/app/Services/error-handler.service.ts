import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

      public handleError(error: any): void {
        const date = new Date();
        const stackTrace = error.stack;
        const stackLines = stackTrace?.split('\n');
        const sourceLine = stackLines?.find((line:any) => line.includes('.component.ts'));
        const filePath = sourceLine?.match(/\((.*\.component\.ts)/)[1];    
        console.error({
        timeStamp: date.toISOString(),
        message:error.message,
        zone:error.zone,
        });
      }
    
}
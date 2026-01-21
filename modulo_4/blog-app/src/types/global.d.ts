import 'react';
import { JSX as ReactJSX } from 'react';

declare global {
  // Extend the JSX namespace to include the Element type
  namespace JSX {
    type Element = ReactJSX.Element;
    
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

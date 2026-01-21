/// <reference types="react/next" />
/// <reference types="react-dom/next" />

// This file is required for TypeScript to recognize the JSX namespace in React 19
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

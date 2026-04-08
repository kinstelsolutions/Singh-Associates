declare global {
  interface Window {
    gtag_report_conversion: (url: string) => boolean;
    gtag: (...args: any[]) => void;
  }
}

export {};

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public pages: Page[] = [
    {
      urlName: 'tale-of-two-buttons',
      displayName: 'A Tale of Two Buttons',
    },
  ];
  public currentPageUrlName: string | null = null;

  constructor() {}
}

export interface Page {
  urlName: string;
  displayName: string;
}

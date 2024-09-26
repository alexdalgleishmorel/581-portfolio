import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public projects: Project[] = [
    {
      urlName: 'tale-of-two-buttons',
      displayName: 'A Tale of Two Buttons',
      displayPhotoName: 'tale-of-two-buttons/tale-of-two-buttons.png'
    },
  ];

  constructor() {}
}

export interface Project {
  urlName: string;
  displayName: string;
  displayPhotoName: string;
}

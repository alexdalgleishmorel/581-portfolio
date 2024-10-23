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
    {
      urlName: 'magic-wand',
      displayName: 'Magic Wand',
      displayPhotoName: 'magic-wand/magic-wand.png'
    },
  ];

  constructor() {}
}

export interface Project {
  urlName: string;
  displayName: string;
  displayPhotoName: string;
}

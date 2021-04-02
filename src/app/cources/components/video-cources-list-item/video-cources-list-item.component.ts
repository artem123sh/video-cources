import { Component, Input } from '@angular/core';

@Component({
  selector: 'vc-video-cources-list-item',
  templateUrl: './video-cources-list-item.component.html',
  styleUrls: ['./video-cources-list-item.component.scss'],
})
export class VideoCourcesListItemComponent {
  @Input()
  public item: string;
}

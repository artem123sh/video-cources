import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-video-cources-list',
  templateUrl: './video-cources-list.component.html',
  styleUrls: ['./video-cources-list.component.scss'],
})
export class VideoCourcesListComponent implements OnInit {
  public items: string[];

  ngOnInit(): void {
    // TODO: replace with a service
    this.items = ['item 1', 'item 2'];
  }
}

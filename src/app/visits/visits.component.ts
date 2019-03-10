import { Component, OnInit } from '@angular/core';

import { Visit } from './visit/visit.model';
import { VisitsService } from './visits.service';

@Component({
  selector: 'mea-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent implements OnInit {

  visits: Visit[] = [];

  constructor(private visitService: VisitsService) { }

  ngOnInit() {
    this.visitService.visits().subscribe(visits => this.visits = visits);
  }

}

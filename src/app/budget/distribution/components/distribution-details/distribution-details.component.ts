import { TagService } from './../../services/tag.service';
import { Component, Input, OnInit } from '@angular/core';
import { Distribution } from '../../models/distribution.model';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '../../models/tag.model';

@Component({
  selector: 'app-distribution-details',
  templateUrl: './distribution-details.component.html',
  styleUrls: ['./distribution-details.component.css'],
})
export class DistributionDetailsComponent implements OnInit {

  @Input() currentDistribution: Distribution = {
    name: '',
    userId: '',
    tags: [],
  };

  constructor() {}

  ngOnInit(): void {
  }

}

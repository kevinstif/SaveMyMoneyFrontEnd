import { DistributionService } from '../../services/distribution.service';
import { Distribution } from './../../models/distribution.model';
import { Component, OnInit } from '@angular/core';
import { TagResource } from '../../models/tagResource.model';

@Component({
  selector: 'app-add-distribution',
  templateUrl: './add-distribution.component.html',
  styleUrls: ['./add-distribution.component.css'],
})
export class AddDistributionComponent implements OnInit {
  distribution: Distribution = {
    id: '',
    name: '',
    userId: '',
    tags: []
  };

  tags: TagResource[] = [];

  submitted = false;

  // About add tags to the distribution
  tag: TagResource = {
    name: '',
    description: '',
    percent: 0,
  };
  // #####################################

  constructor(private distributionService: DistributionService) {}

  ngOnInit(): void {}

  saveDistribution(): void {
    const data = {
      name: this.distribution.name,
      userId: 2,
      tags: this.tags,
    };

    this.distributionService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (err) => console.log(err),
    });
  }

  newDistribution(): void {
    this.submitted = false;
    this.distribution = {
      id: '',
      name: '',
      userId: '',
    };
    this.tags = [];
  }

  // About add tags to the distribution
  addTag(): void {
    this.tags.push(this.tag);
    this.newTag();
  }

  newTag(): void {
    this.tag = {
      name: '',
      description: '',
      percent: 0,
    };
  }
  // #####################################
}

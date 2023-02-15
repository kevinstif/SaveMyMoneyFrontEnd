import { DistributionService } from './../../services/distribution.service';
import { Distribution } from './../../models/distribution.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distribution-list',
  templateUrl: './distribution-list.component.html',
  styleUrls: ['./distribution-list.component.css'],
})
export class DistributionListComponent implements OnInit {
  distributions?: Distribution[];
  currentDistribution: Distribution = {};
  currentIndex = -1;
  title = '';

  constructor(private distributionService: DistributionService) {}

  ngOnInit(): void {
    this.retrieveDistributions();
  }

  retrieveDistributions(): void {
    this.distributionService.getAll().subscribe({
      next: (data) => {
        this.distributions = data;
      },
      error: (err) => console.error(err),
    });
  }

  refreshList(): void {
    this.retrieveDistributions;
    this.currentDistribution = {};
    this.currentIndex = -1;
  }

  setActiveDistribution(distribution: Distribution, index: number): void {
    this.currentDistribution = distribution;
    this.currentIndex = index;
  }
}

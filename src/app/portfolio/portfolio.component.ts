import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  projects = [
    {
      id: 1,
      title: "Nomassa",
      description: "eCommerce website where to sell digital products."
    },
    {
      id: 2,
      title: "robo punk",
      description: "Project for minting NFT based on React.js."
    },
  ]

}

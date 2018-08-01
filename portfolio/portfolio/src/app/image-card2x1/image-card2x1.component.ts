import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-image-card2x1',
	templateUrl: './image-card2x1.component.html',
	styleUrls: ['./image-card2x1.component.scss']
})
export class ImageCard2x1Component implements OnInit {

	renderJson: any;

	constructor() { }

	ngOnInit() {
		this.renderJson = {
			title: "Image Card 1",
			images:[
				{
					"name": "Angular",
					"path": "../assets/images/icons/angular-icon.png"
				},
				{
					"name": "JavaScript",
					"path": "../assets/images/icons/javascript-icon.png"
				},
				{
					"name": "Node Js",
					"path": "../assets/images/icons/nodejs-icon.png"
				},
				{
					"name": "React",
					"path": "../assets/images/icons/react-icon.png"
				},
				{
					"name": "TypeScript",
					"path": "../assets/images/icons/typescript-icon.png"
				}
			]
		};

		console.log(this.renderJson);
	}

}

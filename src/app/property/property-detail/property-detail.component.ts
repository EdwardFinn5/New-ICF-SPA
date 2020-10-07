import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/porperty';
import { HousingService } from 'src/app/services/housing.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  property = new Property();
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private housingService: HousingService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
    (data: Property) => {
      this.property = data['prp'];
    }
    );
    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: Property) => {
    //         this.property = data;
    //       }, error => this.router.navigate(['/'])
    //     );
    //   }
    // );

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true
      },
    ];

    this.galleryImages = [
      {
        small: 'assets/images/house1.jpg',
        medium: 'assets/images/house1.jpg',
        big: 'assets/images/house1.jpg'
      },
      {
        small: 'assets/images/house2.jpg',
        medium: 'assets/images/house2.jpg',
        big: 'assets/images/house2.jpg'
      },
      {
        small: 'assets/images/house3.jpg',
        medium: 'assets/images/house3.jpg',
        big: 'assets/images/house3.jpg'
      },
      {
        small: 'assets/images/house4.jpg',
        medium: 'assets/images/house4.jpg',
        big: 'assets/images/house4.jpg'
      },
      {
        small: 'assets/images/house5.jpg',
        medium: 'assets/images/house5.jpg',
        big: 'assets/images/house5.jpg'
      }
    ];
  }
}

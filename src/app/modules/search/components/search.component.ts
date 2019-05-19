import { Artist } from './../../../shared/models/artist.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from 'src/app/core/services/music.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  token: string;
  artists: Artist[] = [];
  numbers = [1, 2, 3, 4, 5];
  searchParam: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private musicService: MusicService
  ) { }

  ngOnInit() {
    this.token = this.activatedRoute.snapshot.queryParamMap.get('token');
    this.artists = [];
    console.log(this.token);
  }

  searchArtist(): void {
    this.artists = [];
    if (!this.searchParam) {
      return;
    }

    this.musicService
      .searchArtist(this.searchParam, this.token)
      .subscribe(res => {

        console.log(res);
        this.artists = res.data;

        // if (res && res.message.header.status_code === 200) {
        //   res.message.body.artist_list.forEach(element => {
        //     this.artists.push({
        //       artist_id: element.artist.artist_id,
        //       artist_name: element.artist.artist_name,
        //       artist_twitter_url: element.artist.artist_twitter_url
        //     });
        //   });
        // }

      });
  }
}

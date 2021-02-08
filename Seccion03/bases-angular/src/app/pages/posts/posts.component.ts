import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  mensajes: any;

  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.mensajes = this.dataservice.getPosts();

    // this.dataservice.getPosts().subscribe((posts: any[]) => {
    //   console.log(posts);
    //   this.mensajes = posts;
    // });
  }

  escuchaClick(id) {
    console.log('Click en:', id);
  }
}

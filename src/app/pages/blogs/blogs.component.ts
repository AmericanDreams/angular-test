import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Blog } from '../../objects/Blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs!: Blog[]

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getBlogs().subscribe(arts => {
      this.blogs = arts;
    })
  }

}

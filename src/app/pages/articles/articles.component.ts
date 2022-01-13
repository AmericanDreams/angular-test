import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/objects/Article';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles!: Article[];
  count!: string;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getArticles().subscribe(arts => {
      this.articles = arts;
    })
  }

  onFilterSubmit() {
    const c = Number(this.count);
    if (!isNaN(c) && this.count !== "") {
      this.backendService.getArticles(c).subscribe(arts => {
        this.articles = arts;
      })
    }
  }

}

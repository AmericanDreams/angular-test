import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../objects/Article';
import { Blog } from '../objects/Blog';
import { Report } from '../objects/Report';
import {HttpClient} from "@angular/common/http"
import {ARTICLES_URL, REPORTS_URL, BLOGS_URL} from "../util/URLs"


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getArticles(count = 10): Observable<Article[]> {
    return this.http.get<Article[]>(`${ARTICLES_URL}?_limit=${count}`);
  }

  getBlogs(count = 10): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${BLOGS_URL}?_limit=${count}`);
  }

  getReports(count = 10): Observable<Report[]> {
    return this.http.get<Report[]>(`${REPORTS_URL}?_limit=${count}`);
  }
}

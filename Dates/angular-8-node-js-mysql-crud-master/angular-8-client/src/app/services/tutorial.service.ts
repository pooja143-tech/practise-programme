import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/tutorials';
const baseUrls='http://localhost:8080/api/tutorials/search'
const baseUrlss='http://localhost:8080/api/tutorials/searchDate'
@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }

findByDescription(description) {
  console.log("findByDescription method called.....", description)
  return this.http.get(`${baseUrls}?description=${description}`);
}
findByDate(fromDate, todate) {
  console.log("findby date frnt")
  return this.http.get(`${baseUrlss}?fromDate=${fromDate}&todate=${todate}`);
}

}



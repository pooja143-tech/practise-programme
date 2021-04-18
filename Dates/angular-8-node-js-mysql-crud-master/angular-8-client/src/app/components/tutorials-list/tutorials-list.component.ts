import { Component, OnInit } from '@angular/core';
import { title } from 'process';

import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  searchString : string= "";
  searchBy:string = 'title';
  items:any=["title","description"]
  startedDate:any="";
  endDate:any="";
  date:any=""
createdAt:Object="";
  
  constructor(private tutorialService: TutorialService) { }
  
  ngOnInit() {
    this.retrieveTutorials();
  }

  retrieveTutorials() {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveTutorials();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial, index) {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }
  
  

  removeAllTutorials() {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  search(){
    if(this.searchBy=="title"){
      this.searchTitle()
    }
    else if(this.searchBy=="description"){
      this.searchDescription()
      console.log(this.searchBy)
    }
  }

  searchTitle(){
    
    this.tutorialService.findByTitle(this.searchString)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
      
  }



searchDescription() {
  this.tutorialService.findByDescription(this.searchString)
    .subscribe(
      data => {
        this.tutorials = data;
        console.log(data);
        
      },
      error => {
        console.log(error);
      });
}


searchByDate() {
  console.log("Dates to search==>>", this.startedDate, this.endDate);
  this.tutorialService.findByDate(this.startedDate, this.endDate)
    .subscribe(
      data => {
        this.tutorials = data;
        console.log(data);
        console.log( "is date")
      },
      error => {
        console.log(error);
      });
}


 onChanged(event) {
  this.searchBy= event.target.value;
  console.log(this.searchBy)
  
}


}





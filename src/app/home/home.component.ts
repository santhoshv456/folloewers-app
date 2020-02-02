import { Component, OnInit } from '@angular/core';
import { JiraClientService } from '../jira-client.service';
import JiraClient from 'jira-connector';
import { IssueResponse } from 'jira-connector/types/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  title = 'Total Tickets';
  count:number;
  issues:IssueResponse[];

//chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security

  constructor() {
    let count:number;
    let jira = new JiraClient({
      host: "digitalvaultsupport.atlassian.net",
      strictSSL: false,
      basic_auth: {
        email: "santhoshk.vullakula-ext@jci.com",
        api_token: "5QVrhuEYxf6BcQWAYxTF297C"
      }
    });
    
   jira.search.search(
      {
        method:"GET",
        jql:"project in (AT, DIGITALVAU, JEM, CEP) AND 'Impact Start Time' is empty AND  created >= '2020-01-30 07:00' and created <= '2020-01-31 06:59' and type in ('Alerts', 'Incident')",
        startAt:0,
        maxResults:999
     }).then(data=>{
         this.count=data.total;
         this.issues=data.issues;
     });
   }
}

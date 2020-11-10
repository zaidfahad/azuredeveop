import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { ServicesService } from '../../services/services.service';

interface Sprint {
  SNo?: Number;
  Epic?: String;
  Feature?: String;
  UserStory: String;
  Description: String;
 }

@Component({
  selector: 'app-azure-deveop',
  templateUrl: './azure-deveop.component.html',
  styleUrls: ['./azure-deveop.component.css'],
  providers:[ServicesService]
})
export class AzureDeveopComponent implements OnInit {
  azureDeveopData : any;
  data: any[];
  azureprojectDetails:any;
  selectedDataInGrid: any[] = [];
  organizationsDetails: any[] = [];
  projectsDetails: any[] = [];
  azureDeveopDataPaging:any[]=[];
  nextPage:number=0;
  previousPage:number=0;
  constructor(private services:ServicesService) {
   }

  ngOnInit(): void {
    this.getdata();
    this.getProjectDetails();
  }

   
   getdata()
   {
     this.services.GetData().subscribe((result)=>{
      this.azureDeveopData=result;
      this.azureDeveopDataPaging=[];
      let increment=3;
      let index=this.nextPage;
      for(let i=index;i<increment;i++){
        console.log(this.azureDeveopData[i])
        this.azureDeveopDataPaging[i]=this.azureDeveopData[i];
      }
      this.nextPage=this.nextPage+3;
      console.log(this.azureDeveopDataPaging)
    })
   }

   //Urls Organization and Projects Details
   getProjectDetails()
   {
     this.services.GetAzureBaseUrl().subscribe((result)=>{
       this.azureprojectDetails=result;
     })
   }

    //If Main Checked then Load All data to send 
    onMainCheckBoxChanged(checked)
   {
    this.selectedDataInGrid= [];
    if(checked==true)
    {
      this.selectedDataInGrid.push(this.azureDeveopData)
    }
    else
    {
      this.selectedDataInGrid= [];
    }
    console.log(this.selectedDataInGrid)
   }

      
   
   //Checked Box Select Data 
    childcheckBoxChangeEvent(id,checked){
    this.azureDeveopData.forEach(item => {
      if(item._id===id && checked==true)
      {
        this.selectedDataInGrid.push(item)
      }
      else if(item._id===id && checked==false){
         const index: number = this.selectedDataInGrid.indexOf(item);
         this.selectedDataInGrid.splice(index,1);
        }
     })
     console.log(this.selectedDataInGrid)
   }


   onParentSelectChange(selectedValue){
    this.organizationsDetails=[];
     this.azureprojectDetails.forEach(element => {
       if(element.name==selectedValue){
         element.organization.forEach(org => 
          {
          this.organizationsDetails.push(org.name);
         });
       }
     });
     console.log(this.organizationsDetails)
   }

   onOrganizationSelectChange(selectedValue){
     this.projectsDetails=[];
    this.azureprojectDetails.forEach(element => {
         element.organization.forEach(org => 
         {
        if(org.name==selectedValue)
        {
          org.project.forEach(prObj => {
          this.projectsDetails.push(prObj);
          });
         }
       })
      }) 
      console.log(this.projectsDetails)
     }



     //Paging 
     MyFunctionNextPage()
     {
      this.azureDeveopDataPaging=[];
      let increment=this.nextPage+3;
      let index=this.nextPage;
      for(let i=index;i<increment;i++){
        console.log(this.azureDeveopData[i])
        this.azureDeveopDataPaging[i]=this.azureDeveopData[i];
      }
      this.nextPage=this.nextPage+3;
      console.log(this.azureDeveopDataPaging)
     }
  }
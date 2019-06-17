export class Post
{
    jobid:number;
    jobTitle:string;
  //  Description:string;
    company:string;
   // domain:string;
    skillset:string[];
    minsalary:number;
    maxsalary:number;
    Recruiter:string;
    //postedDate:Date;
   // expiryDate:Date;
    //ApplicantList:Applicant;
    experience:number;
    location:String;

     constructor(jobid:number,
        jobTitle:string,
      //  Description:string,
        company:string,
       // domain:string;
        skillset:string[],
        minsalary:number,
        maxsalary:number,
        Recruiter:string,
       // postedDate:Date,
       // expiryDate:Date;
        //ApplicantList:Applicant,
        experience:number,
        location:String)
        {

            this.jobid=jobid;
            this.jobTitle=jobTitle;
          //  Description:string,
            this.company=company;
           // domain:string;
            this.skillset=skillset;
            this.minsalary=minsalary;
            this.maxsalary=maxsalary;
            this.Recruiter=Recruiter;
           // this.postedDate=postedDate;
           // expiryDate:Date;
            //ApplicantList:Applicant,
            this.experience=experience;
            this.location=location;

        }

}

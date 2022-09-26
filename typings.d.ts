export interface SanityBody{
    _createdAt:string;
    _id:string;
    _rev:string;
    _updatedAt:string;
    body:[object];
}
export interface Image {
    _type:'image';
    asset:{
        _ref:string;
        type:'reference';
    }
}
export interface Skill extends SanityBody{
    _type: 'skill';
    image:Image;
    progress:number;
    title:string;
};

export interface PageInfo extends SanityBody{
    _type:"pageInfo";
    address:string;
    backgroundInfo:string; 
    email:string;
    role:string;
    heroImage:Image;
    name:string;
    phoneNumber:string;
    profilePic:Image;
}
export interface Technology extends SanityBody{
    _type: 'skill';
    image: Image;
    progress: number;
    title:string;
}
export interface Social extends SanityBody{
    _type:'social';
    title: string;
    url:string;
}
export interface Project extends SanityBody{
    _type: 'project';
    title:string;
    image:Image;
    linkToBuild:string;
    summary:string;
    technologies:Technology[];
    githubLink:url;
}
export interface Experience extends SanityBody{
    _type:'experience';
    company:string;
    companyImage:Image;
    dateStarted:date;
    dateEnded:date;
    isCurrentlyWorkingHere:boolean;
    jobTitle:string;
    points:string[];
    technologies:Technology[];
}
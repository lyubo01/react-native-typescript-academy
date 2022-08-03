import {IdType} from "./shared-types";
export class PostCreateDto{
    constructor(
        public title:string,
        public content: string,
        public tags:string[],
        public imageUrl: string,
        public authorId: IdType
    ){}
}
export class Post extends PostCreateDto{
    constructor(
        public id: IdType,
        public title:string,
        public content: string,
        public tags:string[],
        public imageUrl: string,
        public authorId: IdType
    ){
        super(title,content,tags,imageUrl,authorId);
        
    }
}
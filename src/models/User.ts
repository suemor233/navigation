import { BaseModel } from "./Base"

export interface UserModel extends BaseModel  {
  username:string,
  introduce:string,
  avatar:string,
  mail:string,
  url:string,
  backgroundImage:string
  socialIds: SocialType[]
}

interface SocialType {
  key:string,
  value:string
}
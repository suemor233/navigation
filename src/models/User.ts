import type { BaseModel } from "./Base"

export interface UserModel extends BaseModel  {
  username:string,
  introduce:string,
  avatar:string,
  mail:string,
  url:string,
  backgroundImage:string
  socialIds: Record<'middle' | 'bottom', SocialType[]>
}

export interface SocialType {
  key:string,
  value:string,
  icon:string
}
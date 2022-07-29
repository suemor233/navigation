import { BasicDataType, DetailDataType } from "./About";
import { UserModel } from "./User";

export interface AggregateRoot {
  user: UserModel;
  aboutBasic:BasicDataType
  aboutDetail:DetailDataType
}
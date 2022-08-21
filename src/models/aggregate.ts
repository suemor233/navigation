import type { BasicDataType, DetailDataType } from "./About";
import type { UserModel } from "./User";

export interface AggregateRoot {
  user: UserModel;
  aboutBasic:BasicDataType
  aboutDetail:DetailDataType
}
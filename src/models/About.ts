import { BaseModel } from './Base';

export interface BasicDataType extends BaseModel {
  key: string
  value: string
}


export interface DetailDataType extends BaseModel {
  title: string
  content: string
  modified?: string
}


export interface DetailReturnDataType {
  aboutDetail: DetailDataType[]
  pagination: {
    pageCount: number
    page: number
    pageSize: number
    itemCount: number
  }
}
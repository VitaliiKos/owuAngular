import {ICompany} from "./company.interface";

export interface IUser {
  id: number;
  name: string;
  company: ICompany;
}

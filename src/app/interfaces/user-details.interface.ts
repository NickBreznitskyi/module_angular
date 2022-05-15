import {IAddress} from "./address.interface";
import {ICompany} from "./company.interface";
import {IUser} from "./user.interface";

export interface IUserDetails extends IUser {
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

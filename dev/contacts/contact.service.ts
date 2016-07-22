/**
 * Created by j on 2016/7/14.
 */
import {Injectable} from "angular2/core";
import {CONTACT} from "./mock-contact";
import {Contact} from "./contact";

@Injectable()
export class ContactService {
  getContacts() {
    return Promise.resolve(CONTACT);
  }

  insertContact(contact: Contact){
    Promise.resolve(CONTACT).then((contacts: Contact[]) => contacts.push(contact));
  }
}

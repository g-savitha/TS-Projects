/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');
customMap.addMarker(user); //BTS : Typescript checks if user is of type mappable, ie., does a user has a location object with lat n lng props
customMap.addMarker(company);

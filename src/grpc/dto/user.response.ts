import {BasePhone} from "../../base/entity/base-phone";

export class UserResponse {
    id: string;
    name: string;
    document: string;
    birthDate: string;
    phones: BasePhone[];
    addresses: string[];
}

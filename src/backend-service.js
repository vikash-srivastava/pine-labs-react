import jquery from "jquery";

const SERVER_BASE_URL = "http://localhost:4200/";
const USER_SERVICE_CONTEXT = "users/";
const ROLE_SERVICE_CONTEXT = "roles/";
export class BackendService{
    static saveUser(user, success){
        return jquery.post(SERVER_BASE_URL + USER_SERVICE_CONTEXT, user, success);
    }
    static deleteUser(userId, successCallback){
        return jquery.ajax(SERVER_BASE_URL + USER_SERVICE_CONTEXT + userId, {
            type : 'delete',
            success: successCallback
        });
    }
    static loadUser(){
        return jquery.get(SERVER_BASE_URL + USER_SERVICE_CONTEXT);
    }

    static loadRoles(){
        return jquery.get(SERVER_BASE_URL + ROLE_SERVICE_CONTEXT);
    }
}
import {UserController} from "./controller/UserController";
import {UserControllerSlow} from "./controller/UserControllerSlow";

export const Routes = [{
    method: "get",
    route: "/v1/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/v1/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/v1/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/v1/users/:id",
    controller: UserController,
    action: "remove"
},
{
    method: "get",
    route: "/v2/users",
    controller: UserControllerSlow,
    action: "all"
}, {
    method: "get",
    route: "/v2/users/:id",
    controller: UserControllerSlow,
    action: "one"
}, {
    method: "post",
    route: "/v2/users",
    controller: UserControllerSlow,
    action: "save"
}, {
    method: "delete",
    route: "/v2/users/:id",
    controller: UserControllerSlow,
    action: "remove"
}

];
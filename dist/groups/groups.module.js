"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const groups_schema_1 = require("./groups.schema");
const groups_controller_1 = require("./groups.controller");
const groups_repository_1 = require("./groups.repository");
const groups_service_1 = require("./groups.service");
let GroupsModule = class GroupsModule {
};
exports.GroupsModule = GroupsModule;
exports.GroupsModule = GroupsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: groups_schema_1.Group.name, schema: groups_schema_1.GroupsSchema }]),
        ],
        controllers: [groups_controller_1.GroupsController],
        providers: [groups_repository_1.GroupsRepository, groups_service_1.GroupsService],
        exports: [groups_service_1.GroupsService, groups_repository_1.GroupsRepository],
    })
], GroupsModule);
//# sourceMappingURL=groups.module.js.map
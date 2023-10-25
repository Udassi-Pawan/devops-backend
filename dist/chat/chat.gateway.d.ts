import { Socket } from "socket.io";
export declare class ChatGateway {
    server: any;
    constructor();
    socketToUser: any[];
    whoIsOnline(): Promise<any[]>;
    joinRoom(client: any): Promise<any>;
    handleConnection(client: Socket): void;
}

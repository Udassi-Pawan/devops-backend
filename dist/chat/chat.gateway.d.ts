export declare class ChatGateway {
    server: any;
    constructor();
    socketToUser: any[];
    whoIsOnline(): Promise<any[]>;
    joinRoom(client: any): Promise<any>;
}

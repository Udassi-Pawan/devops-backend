import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
  ConnectedSocket,
} from "@nestjs/websockets";
import { Socket } from "socket.io";

@WebSocketGateway({
  cors: {
    origin: "*",
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: any;
  constructor() {}

  socketToUser = [];

  @SubscribeMessage("whoOnline")
  async whoIsOnline() {
    return this.socketToUser;
  }

  @SubscribeMessage("joinSocket")
  async joinRoom(@ConnectedSocket() client) {
    console.log("joined client", client.id);
    this.socketToUser.push(client.id);
    return client.id;
  }
  handleConnection(client: Socket) {
    client.on("disconnecting", async (reason) => {
      console.log("disconnect ", client.id);
      this.socketToUser = this.socketToUser.filter((c) => c != client.id);
    });
  }
}

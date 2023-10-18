import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: any;
  constructor() {}

  socketToUser = [];

  @SubscribeMessage('whoOnline')
  async whoIsOnline() {
    return this.socketToUser;
  }

  @SubscribeMessage('joinSocket')
  async joinRoom(@ConnectedSocket() client) {
    console.log('joined client', client.id);
    this.socketToUser.push(client.id);
    return client.id;
  }
}

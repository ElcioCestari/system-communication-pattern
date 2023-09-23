import {
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class WebsocketGateway implements OnGatewayConnection {
  @WebSocketServer()
  socket: Socket;

  handleConnection(client: any, ...args: any[]): any {
    console.log('client connected: ');
    console.log(client.id);
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): string {
    // client.broadcast.emit('testando');
    this.socket.emit('onMessage', {
      msg: client.id,
      content: payload,
    });
    return 'Hello world!';
  }
}

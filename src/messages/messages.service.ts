import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageEntity } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: MessageEntity[] = [
    {
      name: 'Lawson',
      text: 'FirstMessage',
    },
  ];

  create(createMessageDto: CreateMessageDto) {
    return this.messages.push(createMessageDto);
  }

  findAll() {
    return this.messages;
  }
}

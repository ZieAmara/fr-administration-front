import { Component } from '@angular/core';
import { MessageToSend } from '../../interfaces/message.tosend';
import { ApiHelperService } from '../../services/api-helper.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrl: './send-message.component.sass'
})
export class SendMessageComponent {

  messageToSend: MessageToSend;
  listIds: string='';


  constructor(
    private readonly apiHelperService: ApiHelperService,
  ) {
    this.messageToSend = {
      mailExpeditor: '',
      idUsersDestinataires: [],
      object: '',
      content: ''
    }
  }

  sendEmail() {
    this.updateMessageToSend();
    if (this.messageToSend.mailExpeditor !== '' && this.messageToSend.idUsersDestinataires.length > 0 && this.messageToSend.object !== '' && this.messageToSend.content !== '') {
      this.apiHelperService.post({ 
        endpoint: '/message/send-message',
        data: this.messageToSend
      }).then(async (response) => {
        console.log(response);
      });
    }
  }


  updateMessageToSend() {
    this.messageToSend.mailExpeditor = this.messageToSend.mailExpeditor.trim();
    this.messageToSend.idUsersDestinataires = this.listIds.split(',').map(id => +id);
    this.messageToSend.object = this.messageToSend.object.trim();
    this.messageToSend.content = this.messageToSend.content.trim();
  }

  cleanMessageToSend() {
    this.messageToSend = {
      mailExpeditor: '',
      idUsersDestinataires: [],
      object: '',
      content: ''
    }
  }

}

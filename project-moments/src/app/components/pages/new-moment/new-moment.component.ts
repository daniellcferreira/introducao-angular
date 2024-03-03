import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from '../../../Moment';
import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css',
})
export class NewMomentComponent implements OnInit {
  btnText = 'Compartilhar!';

  constructor(
    private momentService: MomentService,
    private messagesService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    this.messagesService.add('Momento adicionando com Sucesso!');

    this.router.navigate(['/']);
  }
}

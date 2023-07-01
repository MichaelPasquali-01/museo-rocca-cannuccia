import { Component, OnInit } from '@angular/core';
import { GuestbookFormService } from 'src/app/services/guestbook-form/guestbook-form.service';

@Component({
  selector: 'app-guestbook-form',
  templateUrl: './guestbook-form.page.html',
  styleUrls: ['./guestbook-form.page.scss'],
})
export class GuestbookFormPage  {
  private file: File | null = null;
  private nome: string = "";
  private messaggio: string = "";

  constructor(private guestbookFormService: GuestbookFormService) { }

  onNameChange(event: any) {
    this.nome = event.target.value;
  }

  onMessaggioChange(event: any) {
    this.messaggio = event.target.value;
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  onFormSubmit() {
    let formData = new FormData();

    formData.append("nome", this.nome);
    formData.append("messaggio", this.messaggio);
    if (this.file !== null) formData.append("foto", this.file, this.file.name);

    this.guestbookFormService.uploadFormData(formData);
  }
}

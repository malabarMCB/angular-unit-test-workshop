import { Component, OnInit } from '@angular/core';
import {Service} from '../../services/service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-sut',
  templateUrl: './sut.component.html',
  styleUrls: ['./sut.component.scss']
})
export class SutComponent implements OnInit {
  message: string;

  constructor(private service: Service) { }

  ngOnInit(): void {
    this.service.getMessage()
      .pipe(first())
      .subscribe(msg => this.message = msg);
  }
}

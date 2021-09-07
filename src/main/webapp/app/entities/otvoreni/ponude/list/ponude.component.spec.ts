import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { PonudeService } from '../service/ponude.service';

import { PonudeComponent } from './ponude.component';

describe('Component Tests', () => {
  describe('Ponude Management Component', () => {
    let comp: PonudeComponent;
    let fixture: ComponentFixture<PonudeComponent>;
    let service: PonudeService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [PonudeComponent],
      })
        .overrideTemplate(PonudeComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PonudeComponent);
      comp = fixture.componentInstance;
      service = TestBed.inject(PonudeService);

      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [{ id: 123 }],
            headers,
          })
        )
      );
    });

    it('Should call load all on init', () => {
      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.ponudes?.[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});

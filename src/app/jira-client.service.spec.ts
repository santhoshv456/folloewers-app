import { TestBed, inject } from '@angular/core/testing';

import { JiraClientService } from './jira-client.service';

describe('JiraClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JiraClientService]
    });
  });

  it('should be created', inject([JiraClientService], (service: JiraClientService) => {
    expect(service).toBeTruthy();
  }));
});

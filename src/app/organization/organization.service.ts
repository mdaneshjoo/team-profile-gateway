import { Injectable } from '@nestjs/common';
import { CreateOrganizationData } from './interfaces/create-organization-data';

@Injectable()
export class OrganizationService {
  constructor() {}

  createOrganization(createData: CreateOrganizationData) {
    console.log(createData);
  }
}

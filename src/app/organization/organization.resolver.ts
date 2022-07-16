import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Organization } from './models/organization.model';
import { BaseMutationModel } from '../../shared/models/mutation-response.model';
import { CreateOrganizationInput } from './dto/create-organization.input';
import { OrganizationService } from './organization.service';
import e from 'express';

@Resolver((of) => Organization)
export class OrganizationResolver {
  constructor(private organizationService: OrganizationService) {}

  @Mutation((returns) => BaseMutationModel)
  async createOrganization(
    @Args('createOrganizationData')
    createOrganizationData: CreateOrganizationInput,
  ): Promise<BaseMutationModel> {
    try {
      this.organizationService.createOrganization(createOrganizationData);
      return { status: 'SUCCESS', message: 'Organization created' };
    } catch (e) {}
    return { status: 'FAIL', message: JSON.stringify(e) };
  }
}

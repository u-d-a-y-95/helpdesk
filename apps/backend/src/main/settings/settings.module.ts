import { Module } from '@nestjs/common';
import { RoleModule } from './role/role.module';
import { CategoryModule } from './category/category.module';
import { StatusModule } from './status/status.module';
import { PriorityModule } from './priority/priority.module';
import { DepartmentModule } from './department/department.module';

@Module({
  imports: [RoleModule, CategoryModule, StatusModule, PriorityModule, DepartmentModule],
})
export class SettingsModule {}

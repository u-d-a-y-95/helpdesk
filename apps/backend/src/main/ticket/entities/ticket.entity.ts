import { CategoryEntity } from 'src/main/settings/category/entity/category.entity';
import { DepartmentEntity } from 'src/main/settings/department/entities/department.entity';
import { PriorityEntity } from 'src/main/settings/priority/entities/priority.entity';
import { StatusEntity } from 'src/main/settings/status/entities/status.entity';
import { CustomerEntity } from 'src/main/user/customer/entities/customer.entity';
import { EmployeeEntity } from 'src/main/user/employee/entities/employee.entity';
import { BaseEntity } from 'src/shared/base/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity({ name: 'ticket' })
export class TicketEntity extends BaseEntity {
  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => CategoryEntity, (category) => category.tickets)
  category: CategoryEntity;
  @Column()
  categoryId: string;

  @ManyToOne(() => DepartmentEntity, (department) => department.tickets)
  department: DepartmentEntity;
  @Column()
  departmentId: string;

  @ManyToOne(() => PriorityEntity, (priority) => priority.tickets)
  priority: PriorityEntity;
  @Column()
  priorityId: string;

  @ManyToOne(() => StatusEntity, (status) => status.tickets)
  status: StatusEntity;
  @Column()
  statusId: string;

  @OneToOne(() => CustomerEntity)
  @JoinColumn()
  requester: CustomerEntity;
  @Column()
  requesterId: string;

  @OneToOne(() => EmployeeEntity)
  @JoinColumn()
  creator: EmployeeEntity;
  @Column()
  creatorId: string;

  @OneToOne(() => EmployeeEntity)
  @JoinColumn()
  assigner: EmployeeEntity;
  @Column()
  assignerId: string;

  @OneToOne(() => EmployeeEntity)
  @JoinColumn()
  assignee: EmployeeEntity;
  @Column()
  assigneeId: string;
}

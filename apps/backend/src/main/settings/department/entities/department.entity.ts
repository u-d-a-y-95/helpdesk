import { TicketEntity } from 'src/main/ticket/entities/ticket.entity';
import { EmployeeEntity } from 'src/main/user/employee/entities/employee.entity';
import { BaseEntity } from 'src/shared/base/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'department' })
export class DepartmentEntity extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @OneToMany(() => EmployeeEntity, (employee) => employee.department)
  employees: EmployeeEntity[];

  @OneToMany(() => TicketEntity, (ticket) => ticket.department)
  tickets: TicketEntity[];
}

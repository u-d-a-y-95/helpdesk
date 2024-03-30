import { EmployeeEntity } from 'src/main/user/employee/entities/employee.entity';
import { BaseEntity } from 'src/shared/base/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({
  name: 'role',
})
export class RoleEntity extends BaseEntity {
  @Column({
    unique: true,
  })
  name: string;

  @Column({
    nullable: true,
  })
  description: string;

  @OneToMany(() => EmployeeEntity, (employee) => employee.role)
  employees: EmployeeEntity[];
}

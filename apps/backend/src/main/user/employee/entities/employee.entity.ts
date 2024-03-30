import { DepartmentEntity } from 'src/main/settings/department/entities/department.entity';
import { RoleEntity } from 'src/main/settings/role/entities/role.entity';
import { BaseEntity } from 'src/shared/base/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';

@Entity({ name: 'employee' })
export class EmployeeEntity extends BaseEntity {
  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name', nullable: true })
  lastName: string;

  @Column({ nullable: true })
  dob: Date;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @Column()
  userId: string;

  @ManyToOne(() => RoleEntity, (role) => role.employees)
  role: RoleEntity;

  @Column()
  roleId: string;

  @ManyToOne(() => DepartmentEntity, (department) => department.employees)
  department: DepartmentEntity;

  @Column()
  departmentId: string;
}

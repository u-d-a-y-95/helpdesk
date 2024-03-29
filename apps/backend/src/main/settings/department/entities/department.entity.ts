import { BaseEntity } from 'src/shared/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'department' })
export class DepartmentEntity extends BaseEntity {
  @Column({ unique: true })
  name: string;
}

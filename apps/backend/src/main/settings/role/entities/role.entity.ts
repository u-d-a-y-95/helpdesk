import { BaseEntity } from 'src/shared/base/base.entity';
import { Column, Entity } from 'typeorm';

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
}

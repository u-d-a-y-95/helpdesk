import { BaseEntity } from 'src/shared/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'member' })
export class MemberEntity extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}

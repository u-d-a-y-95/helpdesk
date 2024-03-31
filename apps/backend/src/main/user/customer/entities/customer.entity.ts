import { BaseEntity } from 'src/shared/base/base.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { MemberEntity } from '../../member/entities/member.entity';

@Entity('customer')
export class CustomerEntity extends BaseEntity {
  @Column()
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  dob: Date;

  @OneToOne(() => MemberEntity)
  @JoinColumn()
  user: MemberEntity;

  @Column()
  userId: string;
}

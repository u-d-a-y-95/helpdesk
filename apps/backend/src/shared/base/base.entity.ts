import {
  BeforeInsert,
  CreateDateColumn,
  PrimaryColumn,
  BaseEntity as TypeOrmBaseEntity,
  UpdateDateColumn,
} from 'typeorm';
import { createId } from '@paralleldrive/cuid2';

export abstract class BaseEntity extends TypeOrmBaseEntity {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @BeforeInsert()
  setCuid() {
    this.id = createId();
  }
}

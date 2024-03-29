import { BaseEntity } from 'src/shared/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'category' })
export class CategoryEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;
}

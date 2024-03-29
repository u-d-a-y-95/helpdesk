import { BaseEntity } from 'src/shared/base/base.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
import slugify from 'slugify';

@Entity({ name: 'status' })
export class StatusEntity extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @Column()
  slug: string;

  @BeforeInsert()
  @BeforeUpdate()
  setSlug() {
    this.slug = slugify(this.name, { lower: true });
  }
}

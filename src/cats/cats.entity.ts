import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cat')
export class CatEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  breed: string;

  @Column('int')
  age: number;
}

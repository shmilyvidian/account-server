import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  type: number;

  @Column("int")
  user_id: number;
  
}
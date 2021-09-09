import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pay_type: number;

  @Column({ length: 100 })
  amount: string;

  @Column({ length: 100 })
  date: string;

  @Column('int')
  type_id: number;

  @Column({ length: 100 })
  type_name: string;

  @Column('int')
  user_id: number;

  @Column({ length: 100 })
  remark: string;
}
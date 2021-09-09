import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ 
    length: 100 
  })
  username: string;

  @Column({ 
    type: "varchar", 
    length: 100 
  })
  password: string;

  @Column({ 
    type: "varchar", 
    length: 100 
  })
  signature: string;

  @Column({ 
    type: "varchar", 
    default: "https://img2.baidu.com/it/u=2275190327,753536208&fm=26&fmt=auto", 
    comment: "头像" 
  })
  avatar: string;
}
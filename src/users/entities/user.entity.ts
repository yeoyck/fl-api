import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column('simple-array')
  skillsets: string[];

  @Column()
  hobby: string;

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}

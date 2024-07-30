import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tb_content')
export class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ unique: true })
  slug: string;

  @Column({ type: 'text' })
  content: string;

  @ManyToOne(() => User, (user) => user.content, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'authorId' })
  author: User;

  @Column({ type: 'enum', enum: ['draft', 'published'], default: 'draft' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'longtext' })
  content: string;

  @Column()
  speakerKey: string; // e.g., 'gooaye', 'mview', 'collective'

  @CreateDateColumn()
  createdDate: Date;
}

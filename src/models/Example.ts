import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('examples')
class Example {
  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @CreateDateColumn({
    name: 'created_at'
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'updated_at'
  })
  updatedAt: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Example }

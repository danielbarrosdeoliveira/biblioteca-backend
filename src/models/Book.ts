import { Column, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('books')
export class Book {
  @PrimaryColumn()
  readonly id: string

  @Column()
  title: string

  @Column()
  isbn: string

  @Column({ name: 'publication-date' })
  publicationDate: Date

  @Column({ name: 'publishing-company' })
  publishCompany: string

  @Column()
  pages: number

  @Column()
  author: string

  @Column({ name: 'cover-image' })
  coverImage: string

  @Column()
  gender: String

  @Column({ name: 'created_at' })
  createdAt: Date

  @Column({ name: 'updated_at' })
  updatedAt: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

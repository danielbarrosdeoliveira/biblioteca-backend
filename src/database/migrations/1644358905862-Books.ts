import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Books1644358905862 implements MigrationInterface {
  private tableName = 'books'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'isbn',
            type: 'string',
            isNullable: false
          },
          {
            name: 'publication-date',
            type: 'timestamp',
            isNullable: false
          },
          {
            name: 'publishing-company',
            type: 'string',
            isNullable: false
          },
          {
            name: 'pages',
            type: 'integer',
            isNullable: false
          },
          {
            name: 'author',
            type: 'string',
            isNullable: false
          },
          {
            name: 'cover-image',
            type: 'string',
            isNullable: false
          },
          {
            name: 'gender',
            type: 'string',
            isNullable: false
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName)
  }
}

import { MigrationInterface, QueryRunner } from "typeorm";

export class sync1657611174374 implements MigrationInterface {
    name = 'sync1657611174374'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "firstName" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "lastName" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "dob" DROP NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "dob"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "lastName"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "firstName"
            SET NOT NULL
        `);
    }

}

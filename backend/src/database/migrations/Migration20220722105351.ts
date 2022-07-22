import { Migration } from "@mikro-orm/migrations";

export class Migration20220722105351 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      "insert into `users` (name, email) VALUES ('flo', 'flo@flo.flo');"
    );
  }

  async down(): Promise<void> {
    this.addSql("delete from `users` where name = 'flo';");
  }
}

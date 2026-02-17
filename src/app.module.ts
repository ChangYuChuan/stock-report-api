import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsModule } from './reports/reports.module';
import { Report } from './reports/report.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || 'Password123',
      database: 'stock_reports',
      entities: [Report],
      synchronize: true,
    }),
    ReportsModule,
  ],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './report.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private repo: Repository<Report>,
  ) {}

  findAll() {
    return this.repo.find({ order: { createdDate: 'DESC' } });
  }

  create(report: Partial<Report>) {
    return this.repo.save(report);
  }
}

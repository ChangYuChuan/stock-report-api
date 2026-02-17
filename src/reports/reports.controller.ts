import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './report.entity';

@Controller('reports')
export class ReportsController {
  constructor(
    @InjectRepository(Report)
    private repo: Repository<Report>,
  ) {}

  @Get()
  async findAll() {
    return await this.repo.find({ order: { createdDate: 'DESC' } });
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.repo.findOneBy({ id });
  }

  @Post()
  async create(@Body() report: Partial<Report>) {
    return await this.repo.save(report);
  }
}

import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

import { data, EType, IData } from './reports.mockdata';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReport(@Param('type') type: string) {
    const result = data.report.filter((item) => item.type === EType.Income)
    console.log(result);
    return [];
  }

  @Get(':id')
  getReportById() {
    return {};
  }

  @Post()
  createReport() {
    return 'Created';
  }

  @Put()
  updateReport() {
    return 'Updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'Deleted';
  }
}

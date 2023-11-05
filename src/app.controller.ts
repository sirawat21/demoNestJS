import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

import { data, EType, IData } from './reports.mockdata';

// Controller for report
@Controller('report/:type')
export class AppController {
  @Get()
  getAllReport(@Param(EType.Income) reportType: string) {
    if (reportType === EType.Income) {
      const result = data.report.filter((item) => item.type === EType.Income);
      console.log(result);
    } else {
      const result = data.report.filter((item) => item.type === EType.Expanse);
      console.log(result);
    }
    return [];
  }

  @Get(':id')
  getReportById(
    @Param(EType.Income) reportType: string,
    @Param('id') reportId: string,
  ) {
    if (reportType === EType.Income) {
      const result = data.report.filter(
        (item) => item.type === EType.Income && item.id === reportId,
      );
      console.log(result);
    } else {
      const result = data.report.filter((item) => item.type === EType.Expanse);
      console.log(result);

    }
    return [];
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

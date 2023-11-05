import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { data, EType, IData } from './reports.mockdata';

// Controller for report
@Controller('report/:type')
export class AppController {
  @Get()
  getAllReport(@Param(EType.Income) reportType: string) {
    if (reportType === EType.Income) {
      const result = data.filter((item) => item.type === EType.Income);
      console.log(result);
    } else {
      const result = data.filter((item) => item.type === EType.Expanse);
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
      const result = data.filter(
        (item) => item.type === EType.Income && item.id === reportId,
      );
      console.log(result);
    } else {
      const result = data.filter((item) => item.type === EType.Expanse);
      console.log(result);
    }
    return [];
  }

  @Post()
  createReport(@Body() { amount, source, type }: IData) {
    const report: IData = {
      id: uuid(),
      amount: amount,
      source: source,
      type: type,
      created_at: Date.now(),
      updated_at: Date.now(),
    };
    console.log(report);
  }

  @Put(':id')
  updateReport(@Body() { amount, source, type }: IData) {
    const report: IData = {
      id: uuid(),
      amount: amount,
      source: source,
      type: type,
      created_at: Date.now(),
      updated_at: Date.now(),
    };
    console.log(report);
    return [];
  }

  @Delete(':id')
  deleteReport() {
    return 'Deleted';
  }
}

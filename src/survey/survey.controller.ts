import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { SurveyService } from './survey.service';
import { Survey } from './schemas/survey.schema';
import { createSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';

import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';

@Controller('surveys')
export class SurveyController {
  constructor(private surveyService: SurveyService) {}

  @Get()
  async getAllSurveys(@Query() query: ExpressQuery): Promise<Survey[]> {
    return this.surveyService.findAll(query);
  }

  @Post()
  @UseGuards(AuthGuard())
  async createSurvey(
    @Body()
    survey: createSurveyDto,
    @Req() req,
  ): Promise<Survey> {
    return this.surveyService.create(survey, req.user);
  }

  @Get(':id')
  async getSurvey(
    @Param('id')
    id: string,
  ): Promise<Survey> {
    return this.surveyService.findById(id);
  }

  @Put(':id')
  async updateSurvey(
    @Param('id')
    id: string,
    @Body()
    survey: UpdateSurveyDto,
  ): Promise<Survey> {
    return this.surveyService.updateById(id, survey);
  }

  @Delete(':id')
  async deleteSurvey(
    @Param('id')
    id: string,
  ): Promise<Survey> {
    return this.surveyService.deleteById(id);
  }
}

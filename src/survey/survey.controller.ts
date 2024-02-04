import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { Survey } from './schemas/survey.schema';
import { createSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';

@Controller('surveys')
export class SurveyController {
  constructor(private surveyService: SurveyService) {}

  @Get()
  async getAllSurveys(): Promise<Survey[]> {
    return this.surveyService.findAll();
  }

  @Post()
  async createSurvey(
    @Body()
    survey: createSurveyDto,
  ): Promise<Survey> {
    return this.surveyService.create(survey);
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
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { Survey } from './schemas/survey.schema';

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
    survey,
  ): Promise<Survey> {
    return this.surveyService.create(survey);
  }
}

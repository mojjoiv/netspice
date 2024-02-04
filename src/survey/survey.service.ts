import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Survey } from './schemas/survey.schema';

@Injectable()
export class SurveyService {
  constructor(
    @InjectModel(Survey.name)
    private surveyModel: mongoose.Model<Survey>,
  ) {}

  async findAll(): Promise<Survey[]> {
    const surveys = await this.surveyModel.find();
    return surveys;
  }

  async create(survey: Survey): Promise<Survey> {
    const res = await this.surveyModel.create(survey);
    return res;
  }

  async findById(id: string): Promise<Survey> {
    const survey = await this.surveyModel.findById(id);

    if (!survey) {
      throw new NotFoundException('Survey not found.');
    }
    return survey;
  }

  async updateById(id: string, survey: Survey): Promise<Survey> {
    return await this.surveyModel.findByIdAndUpdate(id, survey, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Survey> {
    return await this.surveyModel.findByIdAndDelete(id);
  }
}

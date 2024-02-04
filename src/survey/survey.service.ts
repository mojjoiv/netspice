import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Survey } from './schemas/survey.schema';

import { Query } from 'express-serve-static-core';

@Injectable()
export class SurveyService {
  constructor(
    @InjectModel(Survey.name)
    private surveyModel: mongoose.Model<Survey>,
  ) {}

  async findAll(query: Query): Promise<Survey[]> {
    const resPerPage = 2;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);
    const keyword = query.keyword
      ? {
          region: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};
    const surveys = await this.surveyModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);
    return surveys;
  }

  async create(survey: Survey): Promise<Survey> {
    const res = await this.surveyModel.create(survey);
    return res;
  }

  async findById(id: string): Promise<Survey> {
    const isValidId = mongoose.isValidObjectId(id);

    if (!isValidId) {
      throw new BadRequestException('please enter correct ID.');
    }

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

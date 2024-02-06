import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Survey } from './schemas/survey.schema';
import { Query } from 'express-serve-static-core';
import { User } from 'src/auth/schemas/user.schema';

@Injectable()
export class SurveyService {
  constructor(
    @InjectModel(Survey.name)
    private surveyModel: mongoose.Model<Survey>,
  ) {}

  async findAll(query: Query): Promise<Survey[]> {
    try {
      const resPerPage = 50;
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

      console.log('Found surveys:', surveys);

      return surveys;
    } catch (error) {
      console.error('Error finding surveys:', error.message);
      throw new InternalServerErrorException('Failed to retrieve surveys.');
    }
  }

  async create(survey: Survey, user: User): Promise<Survey> {
    try {
      const data = Object.assign(survey, {
        user: user._id, // Assign only the ObjectId
      });
      const res = await this.surveyModel.create(data);

      console.log('Survey created successfully:', res);

      return res;
    } catch (error) {
      console.error('Error creating survey:', error.message);

      if (error.name === 'ValidationError') {
        throw new BadRequestException(
          'Failed to create survey. Validation failed.',
        );
      } else {
        throw new InternalServerErrorException('Failed to create survey.');
      }
    }
  }

  async findById(id: string): Promise<Survey> {
    try {
      const isValidId = mongoose.isValidObjectId(id);

      if (!isValidId) {
        throw new BadRequestException('Please enter a correct ID.');
      }

      const survey = await this.surveyModel.findById(id);

      if (!survey) {
        throw new NotFoundException('Survey not found.');
      }

      console.log('Found survey by ID:', survey);

      return survey;
    } catch (error) {
      console.error('Error finding survey by ID:', error.message);
      throw new InternalServerErrorException('Failed to retrieve survey.');
    }
  }

  async updateById(id: string, survey: Survey): Promise<Survey> {
    try {
      const updatedSurvey = await this.surveyModel.findByIdAndUpdate(
        id,
        survey,
        {
          new: true,
          runValidators: true,
        },
      );

      if (!updatedSurvey) {
        throw new NotFoundException('Survey not found.');
      }

      console.log('Survey updated successfully:', updatedSurvey);

      return updatedSurvey;
    } catch (error) {
      console.error('Error updating survey:', error.message);
      throw new InternalServerErrorException('Failed to update survey.');
    }
  }

  async deleteById(id: string): Promise<Survey> {
    try {
      const deletedSurvey = await this.surveyModel.findByIdAndDelete(id);

      if (!deletedSurvey) {
        throw new NotFoundException('Survey not found.');
      }

      console.log('Survey deleted successfully:', deletedSurvey);

      return deletedSurvey;
    } catch (error) {
      console.error('Error deleting survey:', error.message);
      throw new InternalServerErrorException('Failed to delete survey.');
    }
  }
}

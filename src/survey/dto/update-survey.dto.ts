import { IsEnum, IsOptional, IsString } from 'class-validator';
import {
  BirthArea,
  Bonus,
  Bprogram,
  Bregions,
  Cancer,
  Carea,
  ChildBirth,
  CompleteArea,
  Cprogram,
  Csupply,
  Foundation,
  HearingAid,
  Noregions,
  Program,
  Regions,
  Sarea,
  Service,
  Supply,
  Vaccination,
} from '../schemas/survey.schema';

export class UpdateSurveyDto {
  //vaccination dto
  @IsOptional()
  @IsEnum(Vaccination)
  readonly vaccination: Vaccination;

  @IsOptional()
  @IsString()
  readonly often: string;

  @IsOptional()
  @IsEnum(Supply)
  readonly supply: Supply;

  @IsOptional()
  @IsString()
  readonly region: string;

  @IsOptional()
  @IsEnum(Bonus)
  readonly bonus: Bonus;
  //cancer predetection dto

  @IsOptional()
  @IsEnum(Cancer)
  readonly cancer: Cancer;

  @IsOptional()
  @IsString()
  readonly hften: string;

  @IsOptional()
  @IsEnum(Sarea)
  readonly sarea: Sarea;

  @IsOptional()
  @IsEnum(Regions)
  readonly regions: Regions;

  @IsOptional()
  @IsEnum(Program)
  readonly program: Program;
  //hearing aid dto

  @IsOptional()
  @IsEnum(HearingAid)
  readonly hearingAid: HearingAid;

  @IsOptional()
  @IsString()
  readonly brand: string;

  @IsOptional()
  @IsEnum(CompleteArea)
  readonly completearea: CompleteArea;

  @IsOptional()
  @IsEnum(Noregions)
  readonly noregions: Noregions;

  @IsOptional()
  @IsEnum(Service)
  readonly service: Service;
  //childbirth preparation dto

  @IsOptional()
  @IsEnum(ChildBirth)
  readonly childbirth: ChildBirth;

  @IsOptional()
  @IsString()
  readonly volume: string;

  @IsOptional()
  @IsEnum(BirthArea)
  readonly birtharea: BirthArea;

  @IsOptional()
  @IsEnum(Bregions)
  readonly bregions: Bregions;

  @IsOptional()
  @IsEnum(Bprogram)
  readonly bprogram: Bprogram;
  //childbirth dto

  @IsOptional()
  @IsEnum(Foundation, { message: 'please choose the correct category' })
  readonly foundation: Foundation;

  @IsOptional()
  @IsString()
  readonly explain: string;

  @IsOptional()
  @IsEnum(Carea)
  readonly carea: Carea;

  @IsOptional()
  @IsEnum(Csupply)
  readonly csupply: Csupply;

  @IsOptional()
  @IsEnum(Cprogram)
  readonly cprogram: Cprogram;
}

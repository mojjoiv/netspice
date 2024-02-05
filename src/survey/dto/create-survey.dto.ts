import { IsEmpty, IsEnum, IsNotEmpty, IsString } from 'class-validator';
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
import { User } from 'src/auth/schemas/user.schema';

export class createSurveyDto {
  //vaccination dto
  @IsNotEmpty()
  @IsEnum(Vaccination)
  readonly vaccination: Vaccination;

  @IsNotEmpty()
  @IsString()
  readonly often: string;

  @IsNotEmpty()
  @IsEnum(Supply)
  readonly supply: Supply;

  @IsNotEmpty()
  @IsString()
  readonly region: string;

  @IsNotEmpty()
  @IsEnum(Bonus)
  readonly bonus: Bonus;
  //cancer predetection dto

  @IsNotEmpty()
  @IsEnum(Cancer)
  readonly cancer: Cancer;

  @IsNotEmpty()
  @IsString()
  readonly hften: string;

  @IsNotEmpty()
  @IsEnum(Sarea)
  readonly sarea: Sarea;

  @IsNotEmpty()
  @IsEnum(Regions)
  readonly regions: Regions;

  @IsNotEmpty()
  @IsEnum(Program)
  readonly program: Program;
  //hearing aid dto

  @IsNotEmpty()
  @IsEnum(HearingAid)
  readonly hearingAid: HearingAid;

  @IsNotEmpty()
  @IsString()
  readonly brand: string;

  @IsNotEmpty()
  @IsEnum(CompleteArea)
  readonly completearea: CompleteArea;

  @IsNotEmpty()
  @IsEnum(Noregions)
  readonly noregions: Noregions;

  @IsNotEmpty()
  @IsEnum(Service)
  readonly service: Service;
  //childbirth preparation dto

  @IsNotEmpty()
  @IsEnum(ChildBirth)
  readonly childbirth: ChildBirth;

  @IsNotEmpty()
  @IsString()
  readonly volume: string;

  @IsNotEmpty()
  @IsEnum(BirthArea)
  readonly birtharea: BirthArea;

  @IsNotEmpty()
  @IsEnum(Bregions)
  readonly bregions: Bregions;

  @IsNotEmpty()
  @IsEnum(Bprogram)
  readonly bprogram: Bprogram;
  //childbirth dto

  @IsNotEmpty()
  @IsEnum(Foundation, { message: 'please choose the correct category' })
  readonly foundation: Foundation;

  @IsNotEmpty()
  @IsString()
  readonly explain: string;

  @IsNotEmpty()
  @IsEnum(Carea)
  readonly carea: Carea;

  @IsNotEmpty()
  @IsEnum(Csupply)
  readonly csupply: Csupply;

  @IsNotEmpty()
  @IsEnum(Cprogram)
  readonly cprogram: Cprogram;

  @IsEmpty({ message: 'you cannot pass user id' })
  readonly user: User;
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';

export enum Vaccination {
  YES = 'yes as a seperate service',
  NO = 'no',
  CIRCUMSTANCE = 'only under special circumstance',
}
export enum Supply {
  YES = 'yes',
  No = 'no',
}
export enum Bonus {
  YES = 'yes',
  No = 'no',
  MAYBE = 'maybe',
}
export enum Cancer {
  YES = 'yes as a seperate service',
  No = 'no',
  CIRCUMSTANCE = 'only under special circumstance',
}

export enum Sarea {
  YES = 'yes',
  No = 'no',
}

export enum Regions {
  REGIONA = 'region A',
  REGIONB = 'region B',
  REGIONC = 'region C',
  REGIOND = 'region D',
}
export enum Program {
  YES = 'yes',
  No = 'no',
  MAYBE = 'maybe',
}

//hearing aid exports
export enum HearingAid {
  YES = 'yes as a seperate service',
  No = 'no',
  CIRCUMSTANCE = 'only under special circumstance',
}

export enum CompleteArea {
  YES = 'yes',
  No = 'no',
}

export enum Noregions {
  REGIONA = 'region A',
  REGIONB = 'region B',
  REGIONC = 'region C',
  REGIOND = 'region D',
}

export enum Service {
  YES = 'yes',
  No = 'no',
  MAYBE = 'maybe',
}

//childbirth preparation exports
export enum ChildBirth {
  YES = 'yes as a seperate service',
  No = 'no',
  CIRCUMSTANCE = 'only under special circumstance',
}

export enum BirthArea {
  YES = 'yes',
  No = 'no',
  MAYBE = 'maybe',
}

export enum Bregions {
  REGIONA = 'region A',
  REGIONB = 'region B',
  REGIONC = 'region C',
  REGIOND = 'region D',
}

export enum Bprogram {
  YES = 'yes',
  No = 'no',
  MAYBE = 'maybe',
}

//childbirth exports
export enum Foundation {
  YES = 'yes as a seperate service',
  No = 'no',
  CIRCUMSTANCE = 'only under special circumstance',
}

export enum Csupply {
  YES = 'yes',
  No = 'no',
}

export enum Carea {
  REGIONA = 'region A',
  REGIONB = 'region B',
  REGIONC = 'region C',
  REGIOND = 'region D',
}

export enum Cprogram {
  YES = 'yes',
  No = 'no',
  MAYBE = 'maybe',
}

@Schema({
  timestamps: true,
})
export class Survey {
  //vaccination schema
  @Prop()
  vaccination: Vaccination;

  @Prop()
  often: string;

  @Prop()
  supply: Supply;

  @Prop()
  region: string;

  @Prop()
  bonus: Bonus;

  //skin cancer predetection schema
  @Prop()
  cancer: Cancer;

  @Prop()
  hften: string;

  @Prop()
  sarea: Sarea;

  @Prop()
  regions: Regions;

  @Prop()
  program: Program;

  //hearing aid schema
  @Prop()
  hearingAid: HearingAid;

  @Prop()
  brand: string;

  @Prop()
  completearea: CompleteArea;

  @Prop()
  noregions: Noregions;

  @Prop()
  service: Service;

  //childbirth preparation schema
  @Prop()
  childbirth: ChildBirth;

  @Prop()
  volume: string;

  @Prop()
  birtharea: BirthArea;

  @Prop()
  bregions: Bregions;

  @Prop()
  bprogram: Bprogram;

  //childbirth schema
  @Prop()
  foundation: Foundation;

  @Prop()
  explain: string;

  @Prop()
  carea: Carea;

  @Prop()
  csupply: Csupply;

  @Prop()
  cprogram: Cprogram;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const SurveySchema = SchemaFactory.createForClass(Survey);

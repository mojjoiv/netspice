import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Vaccination {
  YES = 'yes as a seperate service',
  NO = 'no',
  CIRCUMSTANCE = 'only under special circumstancec',
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

@Schema({
  timestamps: true,
})
export class Survey {
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
}

export const SurveySchema = SchemaFactory.createForClass(Survey);

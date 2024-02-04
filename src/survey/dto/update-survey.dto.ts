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
  readonly vaccination: Vaccination;
  readonly often: string;
  readonly supply: Supply;
  readonly region: string;
  readonly bonus: Bonus;
  //cancer predetection dto
  readonly cancer: Cancer;
  readonly hften: string;
  readonly sarea: Sarea;
  readonly regions: Regions;
  readonly program: Program;
  //hearing aid dto
  readonly hearingAid: HearingAid;
  readonly brand: string;
  readonly completearea: CompleteArea;
  readonly noregions: Noregions;
  readonly service: Service;
  //childbirth preparation dto
  readonly childbirth: ChildBirth;
  readonly volume: string;
  readonly birtharea: BirthArea;
  readonly bregions: Bregions;
  readonly bprogram: Bprogram;
  //childbirth dto
  readonly foundation: Foundation;
  readonly explain: string;
  readonly carea: Carea;
  readonly csupply: Csupply;
  readonly cprogram: Cprogram;
}

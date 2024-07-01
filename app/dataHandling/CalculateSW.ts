import { SWResult, SWType } from "./SWData";

export default class CalculateSW {
  inputData: SWType;
  outputData: SWResult;
  constructor(param: SWType) {
    this.inputData = param;
    this.outputData = {
      sbLength: 0,
      sprzLength: 0,
      spnnLength: 0,
      strbLength: 0,
      strbAngel: 0,
      knaggeLength: 0,
      zangeLength: 0,
      knaggeMinHeight: 0,
    };
  }
}

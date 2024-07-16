import { SWResult, SWType } from "./SWData";

export default class CalculateSW {
  inputData: SWType;
  outputData: SWResult;

  innerWidth: number = 0;
  strebeHeight: number = 0;
  spannlength: number = 0;
  alpha: number = 0;
  beta: number = 0;
  ank: number = 0;
  geg: number = 0;
  strebeLengthLong: number = 0;

  constructor(param: SWType) {
    this.inputData = param;
    this.outputData = {
      sbLength: 0,
      sprzLength: 0,
      spnnLength: 0,
      strbLengthShort: 0,
      strbLengthLong: 0,
      strbAlphaAngel: 0,
      strbBravoAngel: 0,
      knaggeLength: 0,
      zangeLength: 0,
      knaggeMinHeight: 0,
    };
    this.outputData.sbLength = this.calculateSBLength();
    this.outputData.sprzLength = this.calculateSprzLength();
    this.outputData.spnnLength = this.calculateSpnnLength();
    this.outputData.strbLengthLong = this.calculateStrbLengthLong();
    this.outputData.strbLengthShort = this.calculateStrbLengthShort();
    this.outputData.strbAlphaAngel = this.calculateStrbAlphaAngle();
    this.outputData.strbBravoAngel = this.calculateStrbBravoAngle();
    this.outputData.knaggeLength = this.calculateKnaggeLength();
    this.outputData.knaggeMinHeight = this.calculateKnaggeMinHeigth();
  }

  calculateSBLength(): number {
    console.log(this.inputData.height);
    return this.inputData.height;
  }

  calculateSprzLength(): number {
    this.innerWidth = this.inputData.width - this.inputData.sbDicke * 2;
    return this.innerWidth - this.inputData.keilSize;
  }

  calculateSpnnLength(): number {
    this.strebeHeight =
      (this.inputData.height - 80 - this.inputData.balkenDicke) / 2;
    if (
      this.innerWidth >=
      this.strebeHeight * 3 + this.inputData.keilSize * 2 + 30
    ) {
      this.spannlength =
        this.innerWidth - this.strebeHeight * 3 - this.inputData.keilSize * 2;
    } else if (
      this.innerWidth <=
      this.strebeHeight * 2 + this.inputData.keilSize * 2 + 30
    ) {
      this.spannlength = 30;
    } else {
      this.spannlength =
        this.innerWidth - this.strebeHeight * 2 - this.inputData.keilSize * 2;
    }

    return this.spannlength;
  }

  calculateStrbLengthLong(): number {
    let strebeWidth: number =
      (this.innerWidth - this.spannlength - this.inputData.keilSize * 2) / 2;
    this.beta = Math.atan(this.strebeHeight / strebeWidth);
    this.alpha = Math.PI / 2 - this.beta;

    this.strebeLengthLong = Math.sqrt(
      this.strebeHeight ** 2 + strebeWidth ** 2
    );
    return Math.round(this.strebeLengthLong * 10) / 10;
  }

  calculateStrbLengthShort(): number {
    this.ank =
      Math.cos(Math.PI * 0.5 - this.alpha) / this.inputData.balkenDicke;
    this.ank =
      (Math.sin(Math.PI - (Math.PI * 0.5 - this.alpha) - Math.PI * 0.5) *
        this.inputData.balkenDicke) /
      Math.sin(Math.PI * 0.5);
    this.geg = Math.sqrt(
      this.inputData.balkenDicke * this.inputData.balkenDicke -
        this.ank * this.ank
    );

    let p = this.geg ** 2 / this.inputData.balkenDicke;
    let q = this.ank ** 2 / this.inputData.balkenDicke;

    let h = Math.sqrt(p * q);
    return this.strebeLengthLong - h * 2;
  }

  calculateStrbAlphaAngle(): number {
    return Math.round(this.alpha * (180 / Math.PI));
  }

  calculateStrbBravoAngle(): number {
    return Math.round(this.beta * (180 / Math.PI));
  }

  calculateKnaggeLength(): number {
    return 20;
  }

  calculateKnaggeMinHeigth(): number {
    return this.inputData.sbDicke / 2;
  }

  calculateZangeLength(): number {
    return this.inputData.height * 0.8;
  }
}

import { SSBResultsFormat, SSBType } from "./SSBData";

export class CalculateSSB {
  inputData: SSBType;
  outputData: SSBResultsFormat;
  alpha: number = 0;
  beta: number = 0;
  ank: number = 0;
  geg: number = 0;
  diagHeigth: number = 0;
  diagWidth: number = 0;
  diagLongLength: number = 0;
  pKatetensatz:number = 0;

  constructor(param: SSBType) {
    this.inputData = param;
    this.outputData = {
      diagonaleAlphaAngle: 0,
      diagonaleBravoAngle: 0,
      diagonaleLongLength: 0,
      diagonaleShortLength: 0,
      diagonaleMidHeight: 0,
      knaggeLength: 0,
      knaggeMinHeight: 0,
      sbLength: 0,
      tlLength: 0,
      versLength: 0,
      mountKnaggeSB: 0,
      mountKnaggeTL: 0,
    };
    this.outputData.tlLength = this.calculateTLLength();
    this.outputData.sbLength = this.calculateSBLength();
    this.outputData.versLength = this.calculateVersLength();
    this.outputData.knaggeLength = this.calculateKnaggeLength();
    this.outputData.knaggeMinHeight = this.calculateKnaggeMinHeight();
    this.outputData.diagonaleLongLength = this.calculateDiagonaleLongLength();
    this.outputData.diagonaleShortLength = this.calculateDiagonaleShortLength();
    this.outputData.diagonaleAlphaAngle = this.calculateDiagonaleAlphaAngle();
    this.outputData.diagonaleBravoAngle = this.calculateDiagonaleBravoAngle();
    this.outputData.diagonaleMidHeight = this.calculateDiagonaleMidHeight();
    this.outputData.mountKnaggeSB = this.calculateKnaggeSB();
    this.outputData.mountKnaggeTL = this.calculateKnaggeTL();
  }

  /**
   * Berechnet die Lanege der Streichbalkens:
   * Lange Streichbalen = hoehe der Gesamtkonstruktion = inputhoehe
   * @returns die laenge des Streichbalkens
   */
  calculateSBLength(): number {
    return this.inputData.height;
  }

  /**
   * Berechnet die Lanege der Treiblade:
   * Wenn inputwidth es ermöglicht, dann ist TLLength=SBLength-balkendicke(hoehe) (-> fuer 45 Grad Winkel), sonst kleiner,
   * wird evaluiert anhand von:
   * die maximale Breite - der Balkendicke(hoehe) -20 cm fuer Wiederlager
   * @returns die laenge der Treiblade
   */
  calculateTLLength(): number {
    if (this.inputData.width > this.inputData.height + 20) {
      return (
        this.inputData.height -
        this.inputData.balkenDicke +
        this.inputData.keilSize
      );
    }

    return this.inputData.width - 20;
  }

  /**
   * Die Laenge einer Kangge ist immer 20 cm
   * @returns 20
   */
  calculateKnaggeLength(): number {
    return 20;
  }

  /**
   * Die minimale Dicke einer Knagge entspricht einem drittel der Balkenhöhe
   * @returns die minimale Dicke der Knagge
   */
  calculateKnaggeMinHeight(): number {
    return Math.ceil(this.inputData.balkenDicke / 2);
  }

  calculateDiagonaleLongLength(): number {
    throwIfUndefined(this.outputData.sbLength);
    throwIfUndefined(this.outputData.tlLength);

    this.diagHeigth =
      this.outputData.sbLength - 40 - this.inputData.balkenDicke;
    this.diagWidth = this.outputData.tlLength - 40 - this.inputData.keilSize;
    this.beta = Math.atan(this.diagHeigth / this.diagWidth);
    this.alpha = Math.PI / 2 - this.beta;

    this.diagLongLength = Math.sqrt(
      this.diagHeigth * this.diagHeigth + this.diagWidth * this.diagWidth
    );
    return Math.round(this.diagLongLength * 10) / 10;
  }

  calculateDiagonaleShortLength(): number {
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

    
    let q = this.geg ** 2 / this.inputData.balkenDicke;
    let p = this.ank ** 2 / this.inputData.balkenDicke;

    this.pKatetensatz = p;

    let h = Math.sqrt(p * q);
    return Math.round((this.diagLongLength - h * 2) * 10) / 10;
  }

  calculateDiagonaleMidHeight(): number {
    return Math.round(this.pKatetensatz*10)/10;
  }

  calculateDiagonaleAlphaAngle(): number {
    return Math.round(this.alpha * (180 / Math.PI));
  }

  calculateDiagonaleBravoAngle(): number {
    return Math.round(this.beta * (180 / Math.PI));
  }

  calculateVersLength(): number {
    throwIfUndefined(this.outputData.tlLength);

    return this.outputData.tlLength * 0.7;
  }

  calculateKnaggeTL(): number {
    return this.inputData.height - 40;
  }

  calculateKnaggeSB(): number {
    return this.diagWidth;
  }
}

function throwIfUndefined<T>(x: T | undefined): asserts x is T {
  if (typeof x === "undefined") throw new Error("OH NOEZ");
}

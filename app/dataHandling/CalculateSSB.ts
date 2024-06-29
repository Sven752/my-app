type SSBType = {
  width: number;
  height: number;
  balkenDicke: number;
  keilSize: number;
};
type SSBResultsFormat = {
  tlLength: number;
  sbLength: number;
  versLength: number;
  knaggeLength: number;
  knaggeMinHeight: number;
  diagonaleLength: number;
  diagonaleAngle: number;
};

export class CalculateSSB {
  inputData: SSBType;
  outputData: SSBResultsFormat;

  constructor(param: SSBType) {
    this.inputData = param;
    this.outputData = {
      tlLength: this.calculateTLLength(),
      sbLength: this.calculateSBLength(),
      versLength: this.calculateVersLength(),
      knaggeLength: this.calculateKnaggeLength(),
      knaggeMinHeight: this.calculateKnaggeMinHeight(),
      diagonaleLength: this.calculateDiagonaleLength(),
      diagonaleAngle: this.calculateDiagonaleAngle(),
    };
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
      return this.inputData.height - this.inputData.balkenDicke;
    }

    return this.inputData.width - this.inputData.balkenDicke - 20;
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
    return Math.ceil(this.inputData.balkenDicke / 3);
  }

  calculateDiagonaleLength(): number {
    return 0;
  }
  calculateDiagonaleAngle(): number {
    return 0;
  }
  calculateVersLength(): number {
    return 0;
  }
}

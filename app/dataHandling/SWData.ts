export type SWType = {
  width: number;
  height: number;
  balkenDicke: number;
  sbDicke: number;
  keilSize: number;
};

export type SWProps = {
  SWData: SWType;
  setSWData: React.Dispatch<React.SetStateAction<SWType>>;
};

export type SWResult = {
  sbLength: number;
  sprzLength: number;
  spnnLength: number;
  strbLengthShort: number;
  strbLengthLong: number;
  strbAlphaAngel: number;
  strbBravoAngel: number;
  knaggeLength: number;
  knaggeMinHeight: number;
  zangeLength: number;
};

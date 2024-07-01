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
  strbLength: number;
  strbAngel: number;
  knaggeLength: number;
  knaggeMinHeight: number;
  zangeLength: number;
};

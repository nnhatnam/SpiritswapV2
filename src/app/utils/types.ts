/**
 * app/utils/types.ts
 *
 * Describe common types, interfaces, and enums
 *
 */

export interface Wallet {
  portfolio: { [key in keyof typeof Token]?: number | undefined };
  rates: { [key in keyof typeof Token]?: number | undefined };
}

export interface TokenValue {
  token: string | Token;
  value: number;
}

export interface ChartProps {
  pairAddress: string | undefined;
  outTokenAddress: string;
  inTokenAddress: string;
  currency: string;
}

export interface TokenCurrencyConversionRate {
  token: Token;
  currency: Currency;
  conversionRate: number;
}

export interface CurrencyOption {
  value: string;
  id: number;
  type: string;
}

export type TokenCurrencyConversionRateMap = {
  [key in keyof typeof Token]?: TokenCurrencyConversionRate | undefined;
};

export enum Sign {
  POSITIVE,
  NEGATIVE,
  NEUTRAL,
}

export enum Currency {
  EUR = 'EUR',
  USD = 'USD',
}

export enum AmountTypes {
  BALANCE = 'balance',
  STAKED = 'staked',
}

export enum Token {
  FTM = 'FTM',
  SPIRIT = 'SPIRIT',
  PAC = 'PAC',
  BTC0x = '0XBTC',
  GIVE2 = '2GIVE',
  ABT = 'ABT',
  ACT = 'ACT',
  ACTN = 'ACTN',
  ADA = 'ADA',
  ADD = 'ADD',
  ADX = 'ADX',
  AE = 'AE',
  AEON = 'AEON',
  AEUR = 'AEUR',
  AGI = 'AGI',
  AGRS = 'AGRS',
  AION = 'AION',
  ALGO = 'ALGO',
  AMB = 'AMB',
  AMP = 'AMP',
  AMPL = 'AMPL',
  ANT = 'ANT',
  APPC = 'APPC',
  ARDR = 'ARDR',
  ARG = 'ARG',
  ARK = 'ARK',
  ARN = 'ARN',
  ARNX = 'ARNX',
  ARY = 'ARY',
  AST = 'AST',
  ATM = 'ATM',
  ATOM = 'ATOM',
  AUDR = 'AUDR',
  AUTO = 'AUTO',
  AYWA = 'AYWA',
  BAB = 'BAB',
  BAL = 'BAL',
  BAND = 'BAND',
  BAT = 'BAT',
  BAY = 'BAY',
  BCBC = 'BCBC',
  BCC = 'BCC',
  BCD = 'BCD',
  BCH = 'BCH',
  BCIO = 'BCIO',
  BCN = 'BCN',
  BCO = 'BCO',
  BCPT = 'BCPT',
  BDL = 'BDL',
  BEAM = 'BEAM',
  BELA = 'BELA',
  BIX = 'BIX',
  BLCN = 'BLCN',
  BLK = 'BLK',
  BLOCK = 'BLOCK',
  BLZ = 'BLZ',
  BNB = 'BNB',
  BNT = 'BNT',
  BNTY = 'BNTY',
  BOOTY = 'BOOTY',
  BOS = 'BOS',
  BPT = 'BPT',
  BQ = 'BQ',
  BRD = 'BRD',
  BSD = 'BSD',
  BSV = 'BSV',
  BTC = 'BTC',
  BTCD = 'BTCD',
  BTCH = 'BTCH',
  BTCP = 'BTCP',
  BTCZ = 'BTCZ',
  BTDX = 'BTDX',
  BTG = 'BTG',
  BTM = 'BTM',
  BTS = 'BTS',
  BTT = 'BTT',
  BTX = 'BTX',
  BURST = 'BURST',
  BZE = 'BZE',
  CALL = 'CALL',
  CC = 'CC',
  CDN = 'CDN',
  CDT = 'CDT',
  CHAIN = 'CHAIN',
  CHAT = 'CHAT',
  CHIPS = 'CHIPS',
  CIX = 'CIX',
  CLAM = 'CLAM',
  CLOAK = 'CLOAK',
  CMM = 'CMM',
  CMT = 'CMT',
  CND = 'CND',
  CNX = 'CNX',
  CNY = 'CNY',
  COB = 'COB',
  COLX = 'COLX',
  COMP = 'COMP',
  COQUI = 'COQUI',
  CRED = 'CRED',
  CRPT = 'CRPT',
  CRW = 'CRW',
  CS = 'CS',
  CTR = 'CTR',
  CTXC = 'CTXC',
  CVC = 'CVC',
  D = 'D',
  DAI = 'DAI',
  DASH = 'DASH',
  DAT = 'DAT',
  DATA = 'DATA',
  DBC = 'DBC',
  DCN = 'DCN',
  DCR = 'DCR',
  DEEZ = 'DEEZ',
  DENT = 'DENT',
  DEW = 'DEW',
  DGB = 'DGB',
  DGD = 'DGD',
  DLT = 'DLT',
  DNT = 'DNT',
  DOCK = 'DOCK',
  DOGE = 'DOGE',
  DOT = 'DOT',
  DRGN = 'DRGN',
  DROP = 'DROP',
  DTA = 'DTA',
  DTH = 'DTH',
  DTR = 'DTR',
  EBST = 'EBST',
  ECA = 'ECA',
  EDG = 'EDG',
  EDO = 'EDO',
  EDOGE = 'EDOGE',
  ELA = 'ELA',
  ELEC = 'ELEC',
  ELF = 'ELF',
  ELIX = 'ELIX',
  ELLA = 'ELLA',
  EMC = 'EMC',
  EMC2 = 'EMC2',
  ENG = 'ENG',
  ENJ = 'ENJ',
  ENTRP = 'ENTRP',
  EON = 'EON',
  EOP = 'EOP',
  EOS = 'EOS',
  EQLI = 'EQLI',
  EQUA = 'EQUA',
  ETC = 'ETC',
  ETH = 'ETH',
  ETHOS = 'ETHOS',
  ETN = 'ETN',
  ETP = 'ETP',
  EUR = 'EUR',
  EVX = 'EVX',
  EXMO = 'EXMO',
  EXP = 'EXP',
  FAIR = 'FAIR',
  FCT = 'FCT',
  FIL = 'FIL',
  FJC = 'FJC',
  FLDC = 'FLDC',
  FLO = 'FLO',
  FSN = 'FSN',
  FTC = 'FTC',
  FUEL = 'FUEL',
  FUN = 'FUN',
  GAME = 'GAME',
  GAS = 'GAS',
  GBP = 'GBP',
  GBX = 'GBX',
  GBYTE = 'GBYTE',
  GENERIC = 'GENERIC',
  GIN = 'GIN',
  GLXT = 'GLXT',
  GMR = 'GMR',
  GNO = 'GNO',
  GNT = 'GNT',
  GOLD = 'GOLD',
  GRC = 'GRC',
  GRIN = 'GRIN',
  GRS = 'GRS',
  GSC = 'GSC',
  GTO = 'GTO',
  GUP = 'GUP',
  GUSD = 'GUSD',
  GVT = 'GVT',
  GXS = 'GXS',
  GZR = 'GZR',
  HIGHT = 'HIGHT',
  HODL = 'HODL',
  HOT = 'HOT',
  HPB = 'HPB',
  HSR = 'HSR',
  HT = 'HT',
  HTML = 'HTML',
  HUC = 'HUC',
  HUSH = 'HUSH',
  ICN = 'ICN',
  ICX = 'ICX',
  IGNIS = 'IGNIS',
  ILK = 'ILK',
  INK = 'INK',
  INS = 'INS',
  ION = 'ION',
  IOP = 'IOP',
  IOST = 'IOST',
  IOTX = 'IOTX',
  IQ = 'IQ',
  ITC = 'ITC',
  JNT = 'JNT',
  JPY = 'JPY',
  KCS = 'KCS',
  KIN = 'KIN',
  KLOWN = 'KLOWN',
  KMD = 'KMD',
  KNC = 'KNC',
  KRB = 'KRB',
  LBC = 'LBC',
  LEND = 'LEND',
  LEO = 'LEO',
  LINK = 'LINK',
  LKK = 'LKK',
  LOOM = 'LOOM',
  LPT = 'LPT',
  LRC = 'LRC',
  LSK = 'LSK',
  LTC = 'LTC',
  LUN = 'LUN',
  MAID = 'MAID',
  MANA = 'MANA',
  MATIC = 'MATIC',
  MCAP = 'MCAP',
  MCO = 'MCO',
  MDA = 'MDA',
  MDS = 'MDS',
  MED = 'MED',
  MEETONE = 'MEETONE',
  MFT = 'MFT',
  MIOTA = 'MIOTA',
  MITH = 'MITH',
  MKR = 'MKR',
  MLN = 'MLN',
  MNX = 'MNX',
  MNZ = 'MNZ',
  MOAC = 'MOAC',
  MOD = 'MOD',
  MONA = 'MONA',
  MSR = 'MSR',
  MTH = 'MTH',
  MTL = 'MTL',
  MUSIC = 'MUSIC',
  MZC = 'MZC',
  NANO = 'NANO',
  NAS = 'NAS',
  NAV = 'NAV',
  NCASH = 'NCASH',
  NDZ = 'NDZ',
  NEBL = 'NEBL',
  NEO = 'NEO',
  NEOS = 'NEOS',
  NEU = 'NEU',
  NEXO = 'NEXO',
  NGC = 'NGC',
  NIO = 'NIO',
  NLC2 = 'NLC2',
  NLG = 'NLG',
  NMC = 'NMC',
  NMR = 'NMR',
  NPXS = 'NPXS',
  NULS = 'NULS',
  NXS = 'NXS',
  NXT = 'NXT',
  OAX = 'OAX',
  OK = 'OK',
  OMG = 'OMG',
  OMNI = 'OMNI',
  ONG = 'ONG',
  ONT = 'ONT',
  OOT = 'OOT',
  OST = 'OST',
  OX = 'OX',
  OXT = 'OXT',
  PART = 'PART',
  PASC = 'PASC',
  PASL = 'PASL',
  PAX = 'PAX',
  PAY = 'PAY',
  PAYX = 'PAYX',
  PINK = 'PINK',
  PIRL = 'PIRL',
  PIVX = 'PIVX',
  PLR = 'PLR',
  POA = 'POA',
  POE = 'POE',
  POLIS = 'POLIS',
  POLY = 'POLY',
  POT = 'POT',
  POWR = 'POWR',
  PPC = 'PPC',
  PPP = 'PPP',
  PPT = 'PPT',
  PRE = 'PRE',
  PRL = 'PRL',
  PUNGO = 'PUNGO',
  PURA = 'PURA',
  QASH = 'QASH',
  QIWI = 'QIWI',
  QLC = 'QLC',
  QRL = 'QRL',
  QSP = 'QSP',
  QTUM = 'QTUM',
  R = 'R',
  RADS = 'RADS',
  RAP = 'RAP',
  RCN = 'RCN',
  RDD = 'RDD',
  RDN = 'RDN',
  REN = 'REN',
  REP = 'REP',
  REPV2 = 'REPV2',
  REQ = 'REQ',
  RHOC = 'RHOC',
  RIC = 'RIC',
  RISE = 'RISE',
  RLC = 'RLC',
  RPX = 'RPX',
  RUB = 'RUB',
  RVN = 'RVN',
  RYO = 'RYO',
  SAFE = 'SAFE',
  SAI = 'SAI',
  SALT = 'SALT',
  SAN = 'SAN',
  SBD = 'SBD',
  SBERBANK = 'SBERBANK',
  SC = 'SC',
  SHIFT = 'SHIFT',
  SIB = 'SIB',
  SIN = 'SIN',
  SKY = 'SKY',
  SLR = 'SLR',
  SLS = 'SLS',
  SMART = 'SMART',
  SNGLS = 'SNGLS',
  SNM = 'SNM',
  SNT = 'SNT',
  SOC = 'SOC',
  SPANK = 'SPANK',
  SPHTX = 'SPHTX',
  SRN = 'SRN',
  STAK = 'STAK',
  START = 'START',
  STEEM = 'STEEM',
  STORJ = 'STORJ',
  STORM = 'STORM',
  STQ = 'STQ',
  STRAT = 'STRAT',
  STX = 'STX',
  SUB = 'SUB',
  SUMO = 'SUMO',
  SYS = 'SYS',
  TAAS = 'TAAS',
  TAU = 'TAU',
  TBX = 'TBX',
  TEL = 'TEL',
  TEN = 'TEN',
  TERN = 'TERN',
  TGCH = 'TGCH',
  THETA = 'THETA',
  TIX = 'TIX',
  TKN = 'TKN',
  TKS = 'TKS',
  TNB = 'TNB',
  TNC = 'TNC',
  TNT = 'TNT',
  TOMO = 'TOMO',
  TPAY = 'TPAY',
  TRIG = 'TRIG',
  TRTL = 'TRTL',
  TRX = 'TRX',
  TUSD = 'TUSD',
  TZC = 'TZC',
  UBQ = 'UBQ',
  UMA = 'UMA',
  UNI = 'UNI',
  UNITY = 'UNITY',
  USD = 'USD',
  USDC = 'USDC',
  USDT = 'USDT',
  UTK = 'UTK',
  VERI = 'VERI',
  VET = 'VET',
  VIA = 'VIA',
  VIB = 'VIB',
  VIBE = 'VIBE',
  VIVO = 'VIVO',
  VRC = 'VRC',
  VRSC = 'VRSC',
  VTC = 'VTC',
  VTHO = 'VTHO',
  WABI = 'WABI',
  WAN = 'WAN',
  WAVES = 'WAVES',
  WAX = 'WAX',
  WBTC = 'WBTC',
  WGR = 'WGR',
  WICC = 'WICC',
  WINGS = 'WINGS',
  WPR = 'WPR',
  WTC = 'WTC',
  X = 'X',
  XAS = 'XAS',
  XBC = 'XBC',
  XBP = 'XBP',
  XBY = 'XBY',
  XCP = 'XCP',
  XDN = 'XDN',
  XEM = 'XEM',
  XIN = 'XIN',
  XLM = 'XLM',
  XMCC = 'XMCC',
  XMG = 'XMG',
  XMO = 'XMO',
  XMR = 'XMR',
  XMY = 'XMY',
  XP = 'XP',
  XPA = 'XPA',
  XPM = 'XPM',
  XRP = 'XRP',
  XSG = 'XSG',
  XTZ = 'XTZ',
  XUC = 'XUC',
  XVC = 'XVC',
  XVG = 'XVG',
  XZC = 'XZC',
  YFI = 'YFI',
  YOYOW = 'YOYOW',
  ZCL = 'ZCL',
  ZEC = 'ZEC',
  ZEL = 'ZEL',
  ZEN = 'ZEN',
  ZEST = 'ZEST',
  ZIL = 'ZIL',
  ZILLA = 'ZILLA',
  ZRX = 'ZRX',
}
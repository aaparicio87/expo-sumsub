// src/ExpoSumsub.types.ts
export type LogEvent = {
  level: number;
  message: string;
};

export type StatusChangedEvent = {
  newStatus: string;
  prevStatus: string;
};

export type ActionResultEvent = {
  actionId: string;
  actionType: string;
  answer: string;
  allowContinuing: boolean;
};

export type SumsubEvent = {
  eventType: string;
  payload: Record<string, any>;
};

export type ExpoSumsubModuleEvents = {
  onTokenExpired: () => void;
  onLog: (event: LogEvent) => void;
  onStatusChanged: (event: StatusChangedEvent) => void;
  onActionResult: (event: ActionResultEvent) => void;
  onEvent: (event: SumsubEvent) => void;
};
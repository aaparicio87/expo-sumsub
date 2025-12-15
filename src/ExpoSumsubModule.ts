import { NativeModule, requireNativeModule } from 'expo';

import { ExpoSumsubModuleEvents } from './ExpoSumsub.types';

declare class ExpoSumsubModule extends NativeModule<ExpoSumsubModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoSumsubModule>('ExpoSumsub');

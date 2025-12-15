import { registerWebModule, NativeModule } from 'expo';

import { ExpoSumsubModuleEvents } from './ExpoSumsub.types';

class ExpoSumsubModule extends NativeModule<ExpoSumsubModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoSumsubModule, 'ExpoSumsubModule');

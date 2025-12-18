import { NativeModule, requireNativeModule } from "expo";

import type { ExpoSumsubModuleEvents } from "./ExpoSumsub.types";

declare class ExpoSumsubModule extends NativeModule<ExpoSumsubModuleEvents> {
	hello: () => string
	testEvent: () => void
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoSumsubModule>("ExpoSumsub");

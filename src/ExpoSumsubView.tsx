import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoSumsubViewProps } from './ExpoSumsub.types';

const NativeView: React.ComponentType<ExpoSumsubViewProps> =
  requireNativeView('ExpoSumsub');

export default function ExpoSumsubView(props: ExpoSumsubViewProps) {
  return <NativeView {...props} />;
}

import * as React from 'react';

import { ExpoSumsubViewProps } from './ExpoSumsub.types';

export default function ExpoSumsubView(props: ExpoSumsubViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}

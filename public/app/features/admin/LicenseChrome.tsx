import * as React from 'react';

import { useTheme2 } from '@grafana/ui';




interface CircleProps {
  size: string;
  style?: React.CSSProperties;
}

export const Circle = ({ size, style, children }: React.PropsWithChildren<CircleProps>) => {
  const theme = useTheme2();
  return (
    <div
      style={{
        width: size,
        height: size,
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderRadius: theme.shape.radius.circle,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

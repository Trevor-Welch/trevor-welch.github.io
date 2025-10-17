// lib/analytics/index.tsx
'use client';

import { Hotjar } from './hotjar';

export function Analytics() {
  return (
    <>
      <Hotjar />
      {/* Add more analytics providers here */}
    </>
  );
}
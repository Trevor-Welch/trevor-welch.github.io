'use client';

import StylizedButton from '@/components/StylizedButton/StylizedButton';

export default function TestPage() {

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px' }}>
      <h1>Test</h1>
      <br></br>
      <StylizedButton effect="glitch" label="Back to Home" href="/" inline variant='dark'/>
    </div>
  );
}

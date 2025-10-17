"use client";
import InfoBox from "@/components/InfoBox/InfoBox";
import testStyles from './testStyles.module.css';

export default function Home() {
  return (
    <main className="page-container">
      <div>This is a test</div>
      <InfoBox title="test" note="test">
        <p>This is a test</p>
      </InfoBox>
    </main>
  );
}

'use client';

import { useEffect, useState } from 'react';

export default function Timestamp() {
  const [timestamp, setTimestamp] = useState<string>('');

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    setTimestamp(date.toLocaleString('en-US', options));
  }, []);

  return <span>{timestamp}</span>;
}
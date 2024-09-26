import test from 'ava';
import formatSizeUnits from './dist/index.js';

test('formats size in kilobytes to megabytes', (t) => {
  const result = formatSizeUnits(10240);
  t.is(result, '10.00 MB');
});

test('formats size in kilobytes to gigabytes', (t) => {
  const result = formatSizeUnits(10485760);
  t.is(result, '10.00 GB');
});

test('formats size under 1024 KB', (t) => {
  const result = formatSizeUnits(512);
  t.is(result, '512.00 KB');
});

test('formats very large size to petabytes', (t) => {
  const result = formatSizeUnits(1125899906842624);
  t.is(result, '1024.00 PB');
});

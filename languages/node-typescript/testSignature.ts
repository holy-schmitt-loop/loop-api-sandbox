/**
 * One-off HMAC validator for debugging a partner's webhook signature.
 *
 * Mirrors utils/validateSignature.ts: HMAC-SHA256(secret, rawBody) -> base64.
 *
 * Usage:
 *   npx ts-node testSignature.ts path/to/body.json
 *   cat body.json | npx ts-node testSignature.ts
 *
 * IMPORTANT: pass the RAW request body bytes — do not re-serialize JSON.
 * Any whitespace difference (e.g. `JSON.stringify(JSON.parse(body))`) will
 * change the hash. Save the exact bytes the partner received to a file.
 */

import * as crypto from 'crypto';
import * as fs from 'fs';

const SECRET = 'a398b2d9f0430c02';
const EXPECTED_SIGNATURE = '4iGfeyc1Td9Q19vDnU/6cFaKcinm7/cekHJXyT+/n7I=';

function computeSignature(rawBody: Buffer | string): string {
  return crypto.createHmac('sha256', SECRET).update(rawBody).digest('base64');
}

async function readBody(): Promise<Buffer> {
  const filePath = process.argv[2];
  if (filePath) {
    return fs.readFileSync(filePath);
  }
  // Fall back to stdin
  const chunks: Buffer[] = [];
  for await (const chunk of process.stdin) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

(async () => {
  const rawBody = await readBody();

  if (rawBody.length === 0) {
    console.error('No body provided. Pass a file path or pipe via stdin.');
    process.exit(1);
  }

  const computed = computeSignature(rawBody);
  const match = computed === EXPECTED_SIGNATURE;

  console.log('Secret:             ', SECRET);
  console.log('Body length (bytes):', rawBody.length);
  console.log('Expected signature: ', EXPECTED_SIGNATURE);
  console.log('Computed signature: ', computed);
  console.log('Match:              ', match ? '✅ YES' : '❌ NO');

  if (!match) {
    // Useful debugging hints when it fails
    console.log('\nFirst 80 bytes of body (hex):');
    console.log(rawBody.subarray(0, 80).toString('hex'));
    console.log('\nLast 20 bytes of body (hex):');
    console.log(rawBody.subarray(Math.max(0, rawBody.length - 20)).toString('hex'));
    console.log(
      '\nIf this should match, the raw body bytes likely differ from what was signed.\n' +
        'Common culprits: trailing newline, re-serialized JSON, charset mismatch, BOM.',
    );
  }

  process.exit(match ? 0 : 1);
})();

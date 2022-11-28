// ----- Using old-school `require`-based import ----- //
import punycodeViaRequire = require('punycode');

const result1: string = punycodeViaRequire.decode('x');
const result2: string = punycodeViaRequire.encode('x');
const result3: string = punycodeViaRequire.toASCII('x');
const result4: string = punycodeViaRequire.toUnicode('x');

const ucs2result1: number[] = punycodeViaRequire.ucs2.decode('x');
const ucs2result2: string = punycodeViaRequire.ucs2.encode([1, 2, 3]);

const version: string = punycodeViaRequire.version;

// ----- Using ES module import syntax with a default export ----- //
import punycode from 'punycode';

// $ExpectType string
const result1b: string = punycode.decode('x');
const result2b: string = punycode.encode('x');
const result3b: string = punycode.toASCII('x');
const result4b: string = punycode.toUnicode('x');

const ucs2result1b: number[] = punycode.ucs2.decode('x');
const ucs2result2b: string = punycode.ucs2.encode([1, 2, 3]);

const versionb: string = punycode.version;

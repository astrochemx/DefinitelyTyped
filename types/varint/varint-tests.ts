import { decode, encode, encodingLength } from "varint";

encode(0); // $ExpectType number[]
encode(0, [] as number[]); // $ExpectType number[]
encode(0, [] as number[], 0); // $ExpectType number[]

encode(0, Buffer.alloc(1)); // $ExpectType Buffer || Buffer<ArrayBuffer>
encode(0, Buffer.alloc(1), 0); // $ExpectType Buffer || Buffer<ArrayBuffer>

encode(0, new Uint8Array(1)); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>
encode(0, new Uint8Array(1), 0); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>

encode.bytes; // $ExpectType number | undefined

decode(Buffer.alloc(1)); // $ExpectType number
decode(Buffer.alloc(1), 0); // $ExpectType number

decode(new Uint8Array(1)); // $ExpectType number
decode(new Uint8Array(1), 0); // $ExpectType number

decode.bytes; // $ExpectType number | undefined

encodingLength(0); // $ExpectType number

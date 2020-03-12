const und = require('underscore');
const lod = require('lodash');

/**
 * isMap - проверяет является ли выражение Map
 */

// lodash
console.log("lod.isTypedArray(new Int8Array)", lod.isTypedArray(new Int8Array));
console.log("lod.isTypedArray(new Uint8Array)", lod.isTypedArray(new Uint8Array));
console.log("lod.isTypedArray(Uint8ClampedArray)", lod.isTypedArray(Uint8ClampedArray));
console.log("lod.isTypedArray(Int16Array)", lod.isTypedArray(Int16Array));
console.log("lod.isTypedArray(Uint16Array)", lod.isTypedArray(Uint16Array));
console.log("lod.isTypedArray(Int32Array)", lod.isTypedArray(Int32Array));
console.log("lod.isTypedArray(Uint32Array)", lod.isTypedArray(Uint32Array));
console.log("lod.isTypedArray(Float32Array)", lod.isTypedArray(Float32Array));
console.log("lod.isTypedArray(Float64Array)", lod.isTypedArray(Float64Array));
console.log("lod.isTypedArray([])", lod.isTypedArray([]));

// es6
console.log("ArrayBuffer.isView(new Int8Array)", ArrayBuffer.isView(new Int8Array));
console.log("ArrayBuffer.isView(new Uint8Array)", ArrayBuffer.isView(new Uint8Array));
console.log("ArrayBuffer.isView(Uint8ClampedArray)", ArrayBuffer.isView(Uint8ClampedArray));
console.log("ArrayBuffer.isView(Int16Array)", ArrayBuffer.isView(Int16Array));
console.log("ArrayBuffer.isView(Uint16Array)", ArrayBuffer.isView(Uint16Array));
console.log("ArrayBuffer.isView(Int32Array)", ArrayBuffer.isView(Int32Array));
console.log("ArrayBuffer.isView(Uint32Array)", ArrayBuffer.isView(Uint32Array));
console.log("ArrayBuffer.isView(Float32Array)", ArrayBuffer.isView(Float32Array));
console.log("ArrayBuffer.isView(Float64Array)", ArrayBuffer.isView(Float64Array));
console.log("ArrayBuffer.isView([])", ArrayBuffer.isView([]));
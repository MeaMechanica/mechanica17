// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/40c60850ad6c8175a62d5ab48c4e016ea5b3dffe/assertion-error/assertion-error.d.ts
// Type definitions for assertion-error 1.0.0
// Project: https://github.com/chaijs/assertion-error
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'assertion-error' {
	class AssertionError implements Error {
		constructor(message: string, props?: any, ssf?: Function);
		name: string;
		message: string;
		showDiff: boolean;
		stack: string;
	}
	export = AssertionError;
}
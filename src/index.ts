// Reexport the native module. On web, it will be resolved to ExpoSumsubModule.web.ts
// and on native platforms to ExpoSumsubModule.ts
export { default } from './ExpoSumsubModule';
export { default as ExpoSumsubView } from './ExpoSumsubView';
export * from  './ExpoSumsub.types';

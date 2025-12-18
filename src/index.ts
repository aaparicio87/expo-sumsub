// Reexport the native module. On web, it will be resolved to ExpoSumsubModule.web.ts
// and on native platforms to ExpoSumsubModule.ts

export * from "./ExpoSumsub.types";
export { default } from "./ExpoSumsubModule";

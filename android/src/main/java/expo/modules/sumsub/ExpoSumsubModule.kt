package expo.modules.sumsub

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoSumsubModule : Module() {

  override fun definition() = ModuleDefinition {
    Name("ExpoSumsub")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") { "Hello world! 👋" }
  }
}

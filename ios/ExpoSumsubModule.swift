import ExpoModulesCore

public class ExpoSumsubModule: Module {

  public func definition() -> ModuleDefinition {
    Name("ExpoSumsub")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      return "Hello world! 👋"
    }

  }
}

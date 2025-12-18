import ExpoModulesCore
import IdensicMobileSDK

let TOKEN_EXPIRED = "onTokenExpired"
let LOG_CHANGE = "onLog"
let STATUS_CHANGED = "onStatusChanged"
let ACTION_RESULT = "onActionResult"
let EVENT = "onEvent"

public class ExpoSumsubModule: Module {

  public func definition() -> ModuleDefinition {
    Name("ExpoSumsub")

    // MARK: - Events
    Events(TOKEN_EXPIRED, LOG_CHANGE, STATUS_CHANGED, ACTION_RESULT, EVENT)

    Function("hello") {
      return "Hello world! 👋"
    }

    Function("testEvent") { () -> Void in
      // Enviar evento sin datos
      self.sendEvent(TOKEN_EXPIRED)

      // Enviar evento con datos - ASEGÚRATE QUE SEA UN DICCIONARIO [String: Any]
      self.sendEvent(
        LOG_CHANGE,
        [
          "level": 1,
          "message": "Test log message",
        ] as [String: Any]
      )
    }
  }
}

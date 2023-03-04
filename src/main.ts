import { ModCallback } from "isaac-typescript-definitions";
import { isAllRoomsClear } from "isaacscript-common";

const MOD_NAME = "extraloot";

main();

function main() {
  // Instantiate a new mod object, which grants the ability to add callback functions that
  // correspond to in-game events.
  const mod = RegisterMod(MOD_NAME, 1);

  // Register a callback function that corresponds to when a new run is started.
  mod.AddCallback(ModCallback.POST_GAME_STARTED, postGameStarted);

  // Print a message to the "log.txt" file.
  Isaac.DebugString(`${MOD_NAME} initialized.`);

  mod.AddCallback(ModCallback.POST_UPDATE, () => {
    // print(Game().GetLevel().GetCurrentRoomDesc().ClearCount);
    // print(Game().GetLevel().GetRooms().Get(1));
    print(isAllRoomsClear());
  });
}

function postGameStarted() {
  Isaac.DebugString("Callback fired: POST_GAME_STARTED");
}

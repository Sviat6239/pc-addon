import { world } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(() => {
    console.warn("Мод Computarization успешно запущен!");
});

world.afterEvents.playerSpawn.subscribe((event) => {
    event.player.sendMessage("Система Computarization: Ядро инициализировано.");
});
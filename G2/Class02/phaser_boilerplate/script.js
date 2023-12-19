import NekakvaScena from "./nekakvaScena.js";
const scene = new Phaser.Scene({ key: 'testScene' })


/** @type {Phaser.Types.Core.GameConfig}*/
const config = {
    width: 800,
    height: 600,
    scene: NekakvaScena,
}

const game = new Phaser.Game(config);
export default class NekakvaScena extends Phaser.Scene {
    constructor(config) {
        super(config)
    }
    init() {
        this.neprijateli = [];
    }
    preload() {
        this.load.image('avionce', './assets/avionce.jpg')
    }

    create() {
        console.log('se povika scenava');
        const avionce = this.add.image(300, 500, 'avionce')
        avionce.setScale(0.1)

        this.input.on(Phaser.Input.Events.POINTER_MOVE, (p) => {
            avionce.x = p.x;
            avionce.y = p.y;
        })

        this.input.on(Phaser.Input.Events.POINTER_DOWN, () => {
            const kursum = this.add.image(avionce.x, avionce.y, 'avionce')
            kursum.setScale(0.05)
            this.tweens.add({
                targets: kursum,
                y: 0,
                duration: avionce.y,
                onUpdate: () => {
                    this.neprijateli.forEach(neprijatel => {
                        console.log(kursum.x, kursum.y, neprijatel.x, neprijatel.y);
                        if (kursum.y <= neprijatel.y) {
                            kursum.destroy()
                            neprijatel.destroy()
                            this.neprijateli.splice(this.neprijateli.indexOf(neprijatel), 1);
                        }
                    })
                },
                onComplete: () => {
                    kursum.destroy();
                }
            })
        })

        setInterval(() => {
            if (Math.random() > 0.25) return;
            this.generirajNeprijatelskoAvionce();
        }, 1000)
    }

    generirajNeprijatelskoAvionce() {
        const x = Math.random() * this.game.scale.width;
        const y = -100;
        const neprijatelskoAvionce = this.add.image(x, y, 'avionce');
        neprijatelskoAvionce.setScale(0.1);
        neprijatelskoAvionce.setAngle(180);
        neprijatelskoAvionce.setTint(0xff0000)
        this.neprijateli.push(neprijatelskoAvionce);
        this.tweens.add({
            targets: neprijatelskoAvionce,
            y: this.game.scale.height + 50,
            duration: 6000,
            onComplete: () => {
                neprijatelskoAvionce.destroy();
                this.neprijateli.splice(this.neprijateli.indexOf(neprijatelskoAvionce), 1);
            }
        })
    }
    update() {

    }
}
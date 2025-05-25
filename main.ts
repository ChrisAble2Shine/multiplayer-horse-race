sprites.onOverlap(SpriteKind.Player, SpriteKind.Finish, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    carnival.customGameOverExpanded("Player " + ("" + ("" + mp.getPlayerProperty(mp.getPlayerBySprite(sprite), mp.PlayerProperty.Number))) + " Wins!", effects.confetti, music.powerUp, carnival.ScoreTypes.LTime)
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function on_button_multiplayer_a_pressed(player2: mp.Player) {
    mp.getPlayerSprite(player2).x += 1.5
})
function set_up_for_players(num: number) {
    
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    while (index <= num - 1) {
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(list2[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setPosition(20, 130 / (num + 1) + 20 * index)
        index += 1
    }
}

let index = 0
let list2 : Image[] = []
list2 = [assets.image`
        p1
        `, assets.image`
        p2
        `, assets.image`
        p4
        `, assets.image`
        p3
        `]
scene.setBackgroundImage(assets.image`
    bg
    `)
set_up_for_players(2)
let finish = sprites.create(assets.image`
    finish
    `, SpriteKind.Finish)
finish.setPosition(150, 50)
game.wrap(function on_wrap() {
    carnival.addLabelTo("Horse Race", carnival.Areas.Bottom)
    game.showLongText("P1, press the A button to Start", DialogLayout.Bottom)
    music.bigCrash.playUntilDone()
})

def on_on_overlap(sprite, otherSprite):
    carnival.custom_game_over_expanded("Player " + ("" + str(mp.get_player_property(mp.get_player_by_sprite(sprite), mp.PlayerProperty.NUMBER))) + " Wins!",
        effects.confetti,
        music.power_up,
        carnival.ScoreTypes.LTIME)
sprites.on_overlap(SpriteKind.player, SpriteKind.finish, on_on_overlap)

def on_button_multiplayer_a_pressed(player2):
    mp.get_player_sprite(player2).x += 1.5
mp.on_button_event(mp.MultiplayerButton.A,
    ControllerButtonEvent.PRESSED,
    on_button_multiplayer_a_pressed)

def set_up_for_players(num: number):
    global index
    sprites.destroy_all_sprites_of_kind(SpriteKind.player)
    while index <= num - 1:
        mp.set_player_sprite(mp.get_player_by_index(index),
            sprites.create(list2[index], SpriteKind.player))
        mp.get_player_sprite(mp.get_player_by_index(index)).set_position(20, 130 / (num + 1) + 20 * index)
        index += 1
index = 0
list2: List[Image] = []
list2 = [assets.image("""
        p1
        """),
    assets.image("""
        p2
        """),
    assets.image("""
        p4
        """),
    assets.image("""
        p3
        """)]
scene.set_background_image(assets.image("""
    bg
    """))
set_up_for_players(2)
finish = sprites.create(assets.image("""
    finish
    """), SpriteKind.finish)
finish.set_position(150, 50)

def on_wrap():
    carnival.add_label_to("Horse Race", carnival.Areas.BOTTOM)
    game.show_long_text("P1, press the A button to Start", DialogLayout.BOTTOM)
    music.big_crash.play_until_done()
game.wrap(on_wrap)

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
	
})
let projectile: Sprite = null
let Goose: Sprite = null
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779996669999666999966699996669999666999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779966666996666699666669966666996666699777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779996669999666999966699996669999666999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779966666996666699666669966666996666699777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779996669999666999966699996669999666999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779966666996666699666669966666996666699777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779996669999666999966699996669999666999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779966666996666699666669966666996666699777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779996669999666999966699996669999666999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779966666996666699666669966666996666699777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779996669999666999966699996669999666999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779966666996666699666669966666996666699777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777779999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
let mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f c c c c f f . . . 
    . f f c c c c c c f f . . 
    f f c c c c c c c c f f . 
    f f c c f c c c c c c f . 
    f f f f f c c c f c c f . 
    f f f f c c c f c c f f . 
    f f f f f f f f f f f f . 
    f f f f f f f f f f f f . 
    . f f f f f f f f f f . . 
    . f f f f f f f f f f . . 
    f e f f f f f f f f e f . 
    e 4 f 7 7 7 7 7 7 c 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
mySprite.setPosition(76, 110)
info.setLife(3)
controller.moveSprite(mySprite, 210, 0)
game.onUpdateInterval(2500, function () {
    Goose = sprites.create(img`
        ..........1111111.....................
        .........1fffffff1....................
        .........1fff222ff1...................
        .........1fffff222f111.........111....
        .........1ff1ffff2ffff1.......1fff1...
        .........1ff11ffffffff1......1ffdff1..
        .........1fff111ffff11.......1fffdf1..
        ..........11ffff1111..........11fdf1..
        ............1ffff..............fddff1.
        .............1fff1............1fdddf1.
        .............1ffff............1fdddf1.
        .............1ffff1...........1fdfdf1.
        ............11ffff1...........1fdfdf1.
        ...111111111eeefff1.11111111111fdfdf1.
        .11fffeeeeeeeeefddf1fffffffffffffddf1.
        1ffffffeeeeeeeeedddfdddffdddddffddff1.
        fffffffeeeeeeeedddddddddddddddddddff1.
        111fffeeeeeeeeedddddddddddffffddddff1.
        ...1ffeeeeeeeedddddddddddfdddffdddf1..
        ...11eeeeeeeeeddddddddddddddddddddf1..
        ....11eeeeeeedddddddfffdddddddddddf1..
        ....11eeeeeddddddddd11fffffffffffff1..
        .....11eeedddddddd11..1111111111111...
        .......1eeddddddd11...................
        ........1f11111ff1....................
        .......1ff1...1ff1....................
        .......1ff1...1ff1....................
        .......1ff1...1ff1....................
        .......1ff1...1ff1....................
        .......1ff111.1ff11111................
        .......1fffff11ffffff1................
        .......111111111111111................
        `, SpriteKind.Enemy)
    Goose.setPosition(randint(20, 130), 30)
})
forever(function () {
    pause(500)
    projectile = sprites.createProjectileFromSprite(img`
        . b b b b b b b b . 
        b 1 1 1 b b 1 1 1 b 
        b 1 1 1 d d 1 1 1 b 
        c 1 1 1 d d 1 1 1 b 
        c 1 1 1 d d 1 1 1 b 
        c 1 1 1 d d 1 1 1 c 
        c b b b d d b b b c 
        . c c c c c c c c . 
        `, mySprite, 0, -100)
})

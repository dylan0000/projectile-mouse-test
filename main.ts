namespace SpriteKind {
    export const MyShot = SpriteKind.create()
    export const mouse = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    hits += 1
    sprite.destroy()
    if (hits >= 15) {
        otherSprite.destroy()
        hits = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite3 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 . . . . 1 . . . . . 
. . . . . 1 . . . . 1 . . . . . 
. . . . . 1 . . . . 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 0, 1)
    mySprite3.setPosition(mySprite.x, mySprite.y)
    mySprite3.follow(mySprite2, 200)
    pause(70)
    myX = mySprite2.x
    MyY = mySprite2.y
    for (let value of sprites.allOfKind(SpriteKind.mouse)) {
        value.destroy()
    }
    reset_mouse()
})
function reset_mouse () {
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . 2 2 2 2 2 2 . . . . . . 
. . . . . . . 2 2 . 2 2 2 . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.mouse)
    mySprite2.setFlag(SpriteFlag.Ghost, true)
    controller.player2.moveSprite(mySprite2, 150, 150)
    mySprite2.setPosition(myX, MyY)
}
let MyY = 0
let myX = 0
let mySprite3: Sprite = null
let hits = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 1 1 1 . . . . . . . 
. . . . . 1 . 1 1 1 . . . . . . 
. . . . 1 1 1 . . . 1 1 . . . . 
. . . . 1 . . . 1 . . 1 1 . . . 
. . . 1 1 . . . 1 . . . 1 . . . 
. . . 1 1 . 1 1 . . . . 1 1 . . 
. . . 1 . 1 1 . . . . . 1 1 . . 
. . . 1 . 1 1 . . 1 1 1 1 . . . 
. . . 1 . . 1 1 1 1 1 1 . . . . 
. . . . 1 1 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
reset_mouse()
mySprite2.setPosition(mySprite.x, mySprite.y)
let mySprite4 = sprites.create(img`
. . . . . . 3 . . . . . . . . . 
. . . . . 3 3 3 . . . . . . . . 
. . . . . 3 3 3 3 3 3 . . 3 . . 
. . . . 3 3 3 3 3 3 3 . . 3 . . 
. . . . 3 3 3 3 3 3 3 . 3 3 . . 
. . . . 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 3 3 3 3 3 3 3 3 . . . 
. . . . 3 3 3 3 3 3 . 3 3 . . . 
. . . . 3 . 3 3 3 3 . 3 3 . . . 
. . . . 3 . 3 3 3 3 . 3 3 . . . 
. . . . . 3 3 3 3 . . 3 3 . . . 
. . . . . 3 . . 3 3 3 3 3 . . . 
. . . . . . . . . . . 3 . . . . 
. . . . . . . . . . . 3 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)

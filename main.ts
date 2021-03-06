namespace SpriteKind {
    export const MyShot = SpriteKind.create()
    export const mouse = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.MyShot, SpriteKind.Enemy, function (sprite, otherSprite) {
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
    mySprite3.follow(mySprite2, 200)
    pause(100)
    myX = mySprite2.x
    MyY = mySprite2.y
    for (let value of sprites.allOfKind(SpriteKind.mouse)) {
        value.destroy()
    }
    reset_mouse()
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        value.setKind(SpriteKind.MyShot)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.MyShot, function (sprite, otherSprite) {
    otherSprite.follow(mySprite3, 200)
})
/**
 * Instructions:
 * 
 * WASD to move character
 * 
 * IJKL to move mouse
 * 
 * space bar to fire
 * 
 * to copy, change variable names and sprite images
 * 
 * pink scribble in the middle is for testing
 * 
 * shoot at pink thing 15 times to destroy
 * 
 * keep in mind that the second projectile variable (MyShot) is 
 * 
 * the variable that will interact with objects, you can rename
 * 
 * Projectile variable type does nothing to affect
 */
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

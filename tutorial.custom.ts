namespace SpriteKind {
    //% isKind
    export const Finish = SpriteKind.create()
}
namespace game{
    /**
    * just run the code
    */
    //% block="finishing touches"  weight=300
    //% handlerStatement=1
    export function wrap(handler: () => void) {
        handler();
    }
}
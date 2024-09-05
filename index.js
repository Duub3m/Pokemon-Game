const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './images/Pellet Town.png'

const playerImage = new Image()
playerImage.src = './images/playerDown.png'

class Sprite{
    constructor({position,velocity,image}) {
        this.position = position
        this.image = image
    }


draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
 }
}

const background = new Sprite({
    position: {
    x: -735,
    y: -600 
},
image: image
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

function animate() {
    window.requestAnimationFrame(animate)//calls the animate function and creates an infinite loop for effect
        //Position of the Background Image (Image, x,y)
        background.draw()
        c.drawImage(
            playerImage,
            
            0, //Crop Positon X
            
            0, //Crop Position Y
           
            playerImage.width / 4, //Crop Width
            
            playerImage.height, //Crop Height
    
            //Actual Coordinates and Actual Width and Height 
            canvas.width / 2 - (playerImage.width / 4) / 2, 
            canvas.height / 2 - playerImage.height / 2,
            playerImage.width / 4,
            playerImage.height
            )

    if (keys.w.pressed){
        background.position.y = background.position.y + 3
    }

    if (keys.s.pressed){
        background.position.y = background.position.y - 3
    }

    if (keys.a.pressed){
        background.position.x = background.position.x + 3
    }

    if (keys.d.pressed){
        background.position.x = background.position.x - 3
    }
}
animate()

//Takes the argument from keys 
window.addEventListener('keydown', (e) => {
//Creates event when we press down on certain keys
    switch (e.key){
        case 'w':
            keys.w.pressed = true
            break
        case 'a':
            keys.a.pressed = true
            break
        case 's':
            keys.s.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break
    }
    console.log(keys)
})

//Takes the argument from keys 
window.addEventListener('keyup', (e) => {
    //Creates event when we press down on certain keys
        switch (e.key){
            case 'w':
                keys.w.pressed = false
                break
            case 'a':
                keys.a.pressed = false
                break
            case 's':
                keys.s.pressed = false
                break
            case 'd':
                keys.d.pressed = false
                break
        }
        console.log(keys)
    })




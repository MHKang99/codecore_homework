

class Turtle {
    constructor (x, y) {
        this.x = x; // current position
        this.y = y;
        this.directionNum = 0;
        this.coordinates = [] //record of positions
        this.coordinates.push(this.x , this.y) // pushes initial position to the record
        
    }
    forward (num) {
        if (this.directionNum === 0) {
            if (this.x + num <= 5) {
                this.x += num
                this.coordinates.push(this.x, this.y)
                console.log(this)
                console.log(Object.values(this.coordinates))
            } else console.log("Not a possible move")
        }
        if (this.directionNum === 1) {
            if (this.x - num >= 0) {
                this.x -= num
            this.coordinates.push(this.x , this.y)
            return this.Turtle
            } else console.log("Not a possible move")
        }
        if (this.directionNum === 2) {
            if (this.x + num <= 5) {
                this.x += num
            this.coordinates.push(this.x , this.y)
            return this.Turtle
            } else console.log("Not a possible move")
        }
        if (this.directionNum === 3) {
            if (this.y + num <= 5) {
                this.y += num
            this.coordinates.push(this.x , this.y)
            return this.Turtle
            } else console.log("Not a possible move")
        }
        if (this.directionNum === 4) {
            if (this.y - num >= 0) {
                this.y -= num
            this.coordinates.push(this.x , this.y)
            return this.Turtle
            } else console.log("Not a possible move")
        }
    }
    left () {
        if (this.y > this.coordinates[this.coordinates.length - 1]) {
            // if the condition is true then this.x will decrease when the forward fucntion is called
            this.directionNum = 1
        } else if (this.y < this.coordinates[this.coordinates.length - 1]) {
            // if the condition is true then this.x will increase when the forward fucntion is called
            this.directionNum = 2
        }
        if (this.x > this.coordinates[this.coordinates.length - 2]) {
            // if the condition is true then this.y will increase when the forward fucntion is called
            this.directionNum = 3
        } else if (this.x < this.coordinates[this.coordinates.length - 2]) {
            // if the condition is true then this.y will decrease when the forward fucntion is called
            this.directionNum = 4
        }
    }
    right () {
        if (this.y > this.coordinates[this.coordinates.length - 1]) {
            // if the condition is true then this.x will increase when the forward fucntion is called
            this.directionNum = 2
        } else if (this.y < this.coordinates[this.coordinates.length - 1]) {
            // if the condition is true then this.x will decrease when the forward fucntion is called
            this.directionNum = 1
        }
        if (this.x > this.coordinates[this.coordinates.length - 2]) {
            // if the condition is true then this.y will decrease when the forward fucntion is called
            this.directionNum = 4
        } else if (this.x < this.coordinates[this.coordinates.length - 2]) {
            // if the condition is true then this.y will increase when the forward fucntion is called
            this.directionNum = 3
        }

    }
}

let myTurtle = new Turtle(0,0)
myTurtle.forward(3)
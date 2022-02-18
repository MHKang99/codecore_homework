

class Turtle {
    constructor (x, y) {
        this.x = x; // current position
        this.y = y;
        this.directionNum = 1;
        this.coordinates = [] //record of positions
        this.allCoordinates = [] //all coordinates from allPoints()
        this.coordinates.push(this.x, this.y) // pushes initial position to the record
        
    }
    forward (num) {
        if (this.directionNum === 1) {
                this.x += num
        }
        if (this.directionNum === 2) {
            if (this.x - num >= 0) {
                this.x -= num
            }
        }
        if (this.directionNum === 3) {
            if (this.y - num >= 0) {
                this.y -= num
            }
        }
        if (this.directionNum === 4) {
            this.y += num
        }
        this.coordinates.push(this.x, this.y)
        return this
    }
    left () {
        
        if (this.y > this.coordinates[this.coordinates.length - 3]) {
            // if the condition is true then this.x will increase when the forward fucntion is called
            this.directionNum = 1
        } else if (this.y < this.coordinates[this.coordinates.length - 3]) {
            // if the condition is true then this.x will decrease when the forward fucntion is called
            this.directionNum = 2
        }
        if (this.x > this.coordinates[this.coordinates.length - 4]) {
            // if the condition is true then this.y will decrease when the forward fucntion is called
            this.directionNum = 3
        } else if (this.x < this.coordinates[this.coordinates.length - 4]) {
            // if the condition is true then this.y will increase when the forward fucntion is called
            this.directionNum = 4
        }
        return this
    }
    right () {
        if (this.y > this.coordinates[this.coordinates.length - 3]) {
            // if the condition is true then this.x will increase when the forward fucntion is called
            this.directionNum = 2
        } else if (this.y < this.coordinates[this.coordinates.length - 3]) {
            // if the condition is true then this.x will decrease when the forward fucntion is called
            this.directionNum = 1
        }
        if (this.x > this.coordinates[this.coordinates.length - 4]) {
            // if the condition is true then this.y will increase when the forward fucntion is called
            
            this.directionNum = 4
        } else if (this.x < this.coordinates[this.coordinates.length - 4]) {
            // if the condition is true then this.y will decrease when the forward fucntion is called
            this.directionNum = 3
        }
        return this
    }
    print () {
        for (let i = 0; i < this.coordinates.length; i++) {
            if (i % 2 === 0) {
                if (this.coordinates[i] === this.coordinates[i+2]) {
                    if (this.coordinates[i+1] > this.coordinates[i+3]) {
                        this.allCoordinates.push([this.coordinates[i], this.coordinates[i+1]])
                        for (let j = 0; j < this.coordinates[i+1] - this.coordinates[i+3]; j++) {
                        this.allCoordinates.push([this.coordinates[i], this.coordinates[i+1]-j]);
                        }
                    }else if (this.coordinates[i+1] < this.coordinates[i+3]) {
                        this.allCoordinates.push([this.coordinates[i], this.coordinates[i+1]])
                        for (let j = 0; j < this.coordinates[i+3] - this.coordinates[i+1]; j++) {
                        this.allCoordinates.push([this.coordinates[i], this.coordinates[i+1]+j]);
                        }
                    }
                } else if (this.coordinates[i] < this.coordinates[i+2]) {
                    this.allCoordinates.push([this.coordinates[i], this.coordinates[i+1]]);
                    for (let j = 0; j < this.coordinates[i+2] - this.coordinates[i]; j++) {
                        this.allCoordinates.push([this.coordinates[i]+j+1, this.coordinates[i+1]]);
                    } 
                }else if (this.coordinates[i] > this.coordinates[i+2]) {
                    this.allCoordinates.push([this.coordinates[i], this.coordinates[i+1]]);
                    for (let j = 0; j < this.coordinates[i] - this.coordinates[i+2]; j++) {
                        this.allCoordinates.push([this.coordinates[i]-j-1, this.coordinates[i+1]]);
                    }   
                }
            }
            
            
        }
        this.allCoordinates.push([this.coordinates[this.coordinates.length-2], this.coordinates[this.coordinates.length-1]])
        for (let j = 0; j < 2; j++) {
            for (let i = 0; i < this.allCoordinates.length-1; i++) {
                if (this.allCoordinates[i][0] === this.allCoordinates[i+1][0] && this.allCoordinates[i][1] === this.allCoordinates[i+1][1]) {
                    this.allCoordinates.splice(i,1)
                    
                }
                
            }
            
        }
        
        const ySortedArr = this.allCoordinates.sort(function(a, b) { 
            return a[1] - b[1];
          })
        let xSortedArr = this.allCoordinates.sort();
        
         
        
        let grid = [];
        for (let i = 0; i <= ySortedArr[ySortedArr.length-1][1]; i++) {
            
            let lineLength = [];
            for (let j = 0; j < xSortedArr[xSortedArr.length-1][0]; j++) {
                if (j === xSortedArr[xSortedArr.length-1][0]-1) {
                    lineLength.push("#") ;
                    lineLength.push("#") ;
                }
                lineLength.push("#") 
                
            }
            grid.push(lineLength)
            
        }
        
        for (let i = 0; i <= ySortedArr[ySortedArr.length-1][1]; i++) {
            for (let j = 0; j < ySortedArr.length; j++) {
                if (i === ySortedArr[j][1]) {
                grid[i].splice(ySortedArr[j][0],1,1)
                }
                
            }
            
            console.log(...grid[i])
        }
    }
    
}

let myTurtle = new Turtle(0,4);
// myTurtle.forward(5).right().forward(5).right().forward(5).right().forward(5).print();
// myTurtle.forward(3).left().forward(3).print();


myTurtle
.forward(3)
.left()
.forward(3)
.right()
.forward(5)
.right()
.forward(8)
.right()
.forward(5)
.right()
.forward(3)
.left()
.forward(3)
.print()

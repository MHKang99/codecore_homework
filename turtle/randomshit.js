// coordinates = [0, 4, 3, 4, 3, 1,
//     8, 1, 8, 9, 3, 9,
//     3, 6, 0, 6]
// let allPoints = []

// for (let i = 0; i < coordinates.length; i++) {
//     if (i % 2 === 0) {
//         if (coordinates[i] === coordinates[i+2]) {
//             if (coordinates[i+1] > coordinates[i+3]) {
//                 allPoints.push([coordinates[i], coordinates[i+1]])
//                 for (let j = 0; j < coordinates[i+1] - coordinates[i+3]; j++) {
//                 allPoints.push([coordinates[i], coordinates[i+1]-j]);
//                 }
//             }else if (coordinates[i+1] < coordinates[i+3]) {
//                 allPoints.push([coordinates[i], coordinates[i+1]])
//                 for (let j = 0; j < coordinates[i+3] - coordinates[i+1]; j++) {
//                 allPoints.push([coordinates[i], coordinates[i+1]+j]);
//                 }
//             }
//         } else if (coordinates[i] < coordinates[i+2]) {
//             allPoints.push([coordinates[i], coordinates[i+1]]);
//             for (let j = 0; j < coordinates[i+2] - coordinates[i]; j++) {
//                 allPoints.push([coordinates[i]+j+1, coordinates[i+1]]);
//             } 
//         }else if (coordinates[i] > coordinates[i+2]) {
//             allPoints.push([coordinates[i], coordinates[i+1]]);
//             for (let j = 0; j < coordinates[i] - coordinates[i+2]; j++) {
//                 allPoints.push([coordinates[i]-j-1, coordinates[i+1]]);
//             }   
//         }
//     }
    
    
// }
// for (let j = 0; j < 2; j++) {
//     for (let i = 0; i < allPoints.length-1; i++) {
//         if (allPoints[i][0] === allPoints[i+1][0] && allPoints[i][1] === allPoints[i+1][1]) {
//             allPoints.splice(i,1)
            
//         }
        
//     }
    
// }



//  console.log(allPoints)






const allCoordinates = [
    [ 0, 4 ], [ 1, 4 ], [ 2, 4 ],
    [ 3, 4 ], [ 3, 3 ], [ 3, 2 ],
    [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
    [ 6, 1 ], [ 7, 1 ], [ 8, 1 ],
    [ 8, 2 ], [ 8, 3 ], [ 8, 4 ],
    [ 8, 5 ], [ 8, 6 ], [ 8, 7 ],
    [ 8, 8 ], [ 8, 9 ], [ 7, 9 ],
    [ 6, 9 ], [ 5, 9 ], [ 4, 9 ],
    [ 3, 9 ], [ 3, 8 ], [ 3, 7 ],
    [ 3, 6 ], [ 2, 6 ], [ 1, 6 ],
    [ 0, 6 ]
]


//  console.log(xSortedArr[xSortedArr.length-1][0], ySortedArr[ySortedArr.length-1][1]) 

const ySortedArr = allCoordinates.sort(function(a, b) { 
    return a[1] - b[1];
  })
let xSortedArr = allCoordinates.sort();

 

let grid = [];
for (let i = 0; i <= ySortedArr[ySortedArr.length-1][1]; i++) {
    
    let lineLength = [];
    for (let j = 0; j < xSortedArr[xSortedArr.length-1][0]; j++) {
        
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




    var input = [[1,2,3,4],[5,6,7,8], [9,10,11,12],[13,14,15,16]]

    // First approach, it fails if the matrix is odd 
        function spiralMatrix(ip = input){
            var row =0
            var column = 0
            var result = []

            while(row < (ip[0].length-1)/2 && column < (ip.length-1)/2){
                // for (0,0) -> (0,n)
                for(let i=row; i<((ip[0].length-1)-row); i++){
                    result.push(ip[column][i])
                }

                // for (0,n) -> (n,n)
                for(let i=column; i<((ip.length-1)-column); i++){
                    result.push(ip[i][(ip.length-1)-column])
                }
                
                // for (n,n) -> (n,0)
                for(let i=(ip[0].length-1)-row; i>row; i--){
                    result.push(ip[(ip.length-1-column)][i])
                }

                // for (n,0) -> (0,0)
                for(let i=(ip[0].length-1)-row; i>row; i--){
                    result.push(ip[i][row])
                }
                row++
                column++
            }
        }

        // console.log(spiralMatrix())


        // SECOND SOLUTION
        var input = [[1,2,3,4],
             [5,6,7,8],
             [9,10,11,12],
             [13,14,15,16]]

        function spiralMatrix(matrix){
            // vertical
            var top = 0
            var left = 0

            // horizontal
            var right = matrix[0].length -1
            var bottom = matrix.length -1

            var result = []

            while(top < bottom || left < right){

                // for (0,0) -> (0,n)
                for(let i=left; i<=right; i++){
                    result.push(matrix[top][i])
                }
                top++

                // for (0,n) -> (n,n)
                for(let i=top; i<= bottom; i++){
                    result.push(matrix[i][right])
                }
                right--

                // for (n,n) -> (0,n)
                for(let i=right; i>=left; i--){
                    result.push(matrix[bottom][i])
                }
                bottom--

                // for (n,0) -> (0,0)
                for(let i=bottom; i>=top; i--){
                    result.push(matrix[i][left])
                }
                left++
            }

            return result

        }

        spiralMatrix(input)
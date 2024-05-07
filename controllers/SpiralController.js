
class SpiralController {

    constructor(){
       
    }

    // Función para generar la matriz estilo caracol
    generateSpiralMatrix(n) {
        const matrix = [];
        for (let i = 0; i < n; i++) {
          matrix.push([]);
          for (let j = 0; j < n; j++) {
            matrix[i].push(0);
          }
        }
    
        let top = 0, bottom = n - 1, left = 0, right = n - 1;
        let numToAdd = 1;
    
        while (numToAdd <= n * n) {
          // Rellenar la fila superior
          for (let i = left; i <= right; i++) {
            matrix[top][i] = numToAdd++;
          }
          top++;
    
          // Rellenar la columna derecha
          for (let i = top; i <= bottom; i++) {
            matrix[i][right] = numToAdd++;
          }
          right--;
    
          // Rellenar la fila inferior (en orden inverso)
          for (let i = right; i >= left; i--) {
            matrix[bottom][i] = numToAdd++;
          }
          bottom--;
    
          // Rellenar la columna izquierda (en orden inverso)
          for (let i = bottom; i >= top; i--) {
            matrix[i][left] = numToAdd++;
          }
          left++;
        }
    
        return matrix;
      }
}

module.exports = SpiralController


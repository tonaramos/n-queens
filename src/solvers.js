/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(k) {
  var aBoard = new Board({n: k}); 
  for ( var i = 0; i < k; i++) {
    aBoard.togglePiece(i, i);
  }
  var solution = aBoard.rows();
  console.log('Single solution for ' + k + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(x) {
  
  let board = new Board({n:x})
  let solutionStorage = [];
  var solutionCount = solutionStorage.length; //fixme
  //given n iterate ofer every possible solution starting for each placement of 
  // of the board
  //  
  //
  // set a function that will take the boardsize and a coordinate  and will check all 
  //   keep a ruleOutRow = [];
  //   keep a ruleOutColum = [];
  //   possible solutions. 
  //   test the solution if valid add to storage, 
  //.  if invalid dont do anything
  //. add ruled out row and column to rule out arrays
  let checkBoardFunction  = function (coor1, coor2, board) {
    let outPut;
    let ruleOutRow = [];
    let ruleOutColum = [];
    for (let i = 0; i < board.rows().length; i++) {
      for (let k = 0; k < board.rows().length; k++){
           
        if (i !== coor1 && k !== coor2){
        board.togglePiece(i,k);
          if (board.hasAnyRowConflicts() && board.hasRowConflictAt()){
            solutionStorage.push(board);
          }
        }
      }
    } 
  };

  for (let coor1 = 0; coor1<x; coor1++){
    for (let coor2 = 0; coor2<x; coor2++){
      checkBoardFunction(coor1, coor2, board)
    }
  }
  console.log('Number of solutions for ' + x + ' rooks:', solutionCount);
  return solutionCount;
};














// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(k) {
   
  var numB = 0;
  var queenBoard = new Board({n: k}); 
  var num = queenBoard.rows().length - 1;  
  if (k === 0){
    return [];
  }
  if (k === 1) {
    return [[1]];
  } 
  for ( var i = 1; i <= k; i++) {
      if(i % 2 === 1 && i !== k){
        queenBoard.togglePiece(numB, i);
        numB++;
      }
      if(i % 2 === 0 && i !== k){
        queenBoard.togglePiece(num, i);
        num--;
      }
      // if (){
       else if (i === k) {
        queenBoard.togglePiece(numB, 0);
      } 
    }
  var solution = queenBoard.rows();
console.log('this sol: ',queenBoard.rows());

  console.log('Single solution for ' + k + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

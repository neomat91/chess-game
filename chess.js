// CHESS 

console.log('Welcome to my chess game \u270F');
//  Pieces :
//  	 - White - w
//  	 - Black - b
//	 - Pawns - p 
//       - Rooks - r
// 	 - Knights - n 
//       - Bishops - b
//       - Queen - q
// 	 - King - k

const Chess = require('./chess_git_supp').Chess;
//import Chess from "./chess_git_supp.js";

const chess = new Chess();

class bst 
{
	static __base__()
	{
		return console.log(chess.ascii());	
	}
	 
}

bst.__base__();

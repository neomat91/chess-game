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

	static random()
	{
		var _moves = chess.moves();
		var rand_move  = _moves[Math.floor(Math.random()*_moves.length)];
		chess.move(rand_move);
		return console.log(chess.ascii());
	}
}

bst.random();

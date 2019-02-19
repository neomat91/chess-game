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

var chess = new Chess();

class bst 
{
	static __base__()
	{
		console.log(chess.ascii());

	}

	static hier(pawn)
	{
		//wp 10		bp -10
		//wr 30		br -30
		//wb 30		bb -30
		//we 50		be -50
		//wk 900	bk -900
		//wq 90		bq -90

		
		for(var i=0;i<pawn.length;i++)
		{
			var calculated=[];

			if(chess.turn()=='w')
			{
				if(pawn[i] == /K/)
				{
					var value = 900;
				}
				else if(pawn[i] == /Q/)
				{
					var value = 90;
				}
				else if(pawn[i] == /B/)
				{
					var value = 30;
				}
				else if(pawn[i] == /R/)
				{
					var value = 50;
				}
				else if(pawn[i] == /N/)
				{
					var value = 30;
				}
				else
				{
					var value = 10;
				}
				calculated[i] = value;
			}
		}
		var max = Math.max(calculated);
		var index = calculated.indexOf(max);
		var fmove = pawn[index];
		return fmove;
	}

	static random(counter)
	{
//		console.log(counter);
//		if(fen)
//		{
//			var chess = new Chess(fen);
//		}
		var _moves = chess.moves();
		var _move = bst.hier(_moves);
		console.log(_move);
//		var rand_move  = _moves[Math.floor(Math.random()*_moves.length)];
		chess.move(_move);	
//		var position = chess.fen();
		if(counter < 3)
		{
			counter  = counter + 1;
			bst.random(counter);
		}
		else
		{
			console.log(chess.ascii());
		}
	}



	static min()
	{
		
	}

	static max()
	{

	}


}

bst.random(0);


<?php

class HomeController extends BaseController {



	//Player Controller
	public function start()
	{
		$eingang =  Questionnaire::where('name', '=', 'eingang')->first();
		return View::make('welcome', array('eingang' => $eingang));
	}	


	public function createplayer(){

		$newplayer = new Player;
		$newplayer->gender = Input::get('gender');
		$newplayer->semester = Input::get('semester');
		$newplayer->type = "postiv";
		$newplayer->save();
		$eingang =  Questionnaire::where('name', '=', 'eingang')->first();
		foreach ($eingang->question as $q) {
			$qfield = 'q'.$q->id;
			$a = new Answer;
			$a->player_id = $newplayer->id;
			$a->question_id = $q->id;
			$a->answer = Input::get($qfield);
			$a->questionnaire_id = $eingang->id;
			$a->save();
		}
		//return View::make('game-n', array('newplayer' => $newplayer));





		$pca = $newplayer->answers[0]->answer;
		$lawa = $newplayer->answers[1]->answer;
		if($pca <= 4){
			$pc = 'Nein';
		}else{
			$pc = 'Ja';
		}		
		if($lawa <= 4){
			$law = 'Nein';
		}else{
			$law = 'Ja';
		}
		$gender = $newplayer->gender;
		if($pc == 'Nein' && $law == 'Nein' && $gender == 'weiblich'){
			$newplayer->type = 1;

		}elseif($pc == 'Nein' && $law == 'Nein' && $gender == 'männlich'){
			$newplayer->type = 2;

		}elseif($pc == 'Nein' && $law == 'Ja' && $gender == 'weiblich'){
			$newplayer->type = 3;

		}elseif($pc == 'Nein' && $law == 'Ja' && $gender == 'männlich'){
			$newplayer->type = 4;

		}elseif($pc == 'Ja' && $law == 'Nein' && $gender == 'weiblich'){
			$newplayer->type = 5;

		}elseif($pc == 'Ja' && $law == 'Nein' && $gender == 'männlich'){
			$newplayer->type = 6;

		}elseif($pc == 'Ja' && $law == 'Ja' && $gender == 'weiblich'){
			$newplayer->type = 7;

		}elseif($pc == 'Ja' && $law == 'Ja' && $gender == 'männlich'){
			$newplayer->type = 8;

		}
		$newplayer->save();

		$typcounts = [
			"negativ" => Player::where('gametype','=', 'negativ')->where('type','=', $newplayer->type)->count(),
			"positiv" => Player::where('gametype','=', 'positiv')->where('type','=', $newplayer->type)->count(),
			"neutral" => Player::where('gametype','=', 'neutral')->where('type','=', $newplayer->type)->count()
		];
		$min_value_typcounts=array_keys($typcounts, min($typcounts));
		
		$counts = [
			"negativ" => Player::where('gametype','=', 'negativ')->count(),
			"positiv" => Player::where('gametype','=', 'positiv')->count(),
			"neutral" => Player::where('gametype','=', 'neutral')->count()
		];
		$min_value_counts=array_keys($counts, min($counts));
		$max_value_counts=array_keys($counts, max($counts));

		switch ($min_value_typcounts[0]) {
			case 'negativ':
					if($counts[$max_value_counts[0]] - $counts[$min_value_counts[0]] > 1){
						switch ($min_value_counts[0]) {
							case 'negativ':
								$newplayer->gametype = 'negativ';
								$newplayer->save();
								return View::make('game-n', array('newplayer' => $newplayer));

								break;
							case 'positiv':

								$newplayer->gametype = 'positiv';
								$newplayer->save();
								return View::make('game-p', array('newplayer' => $newplayer));

								break;
							case 'neutral':
								$newplayer->gametype = 'neutral';
								$newplayer->save();
								return View::make('game', array('newplayer' => $newplayer));

								break;
							
							default:
								# code...
								break;
						}
					}else{
						$newplayer->gametype = 'negativ';
						$newplayer->save();
						return View::make('game-n', array('newplayer' => $newplayer));
					}
					break;
				
			case 'positiv':
			if($counts[$max_value_counts[0]] - $counts[$min_value_counts[0]] > 1){
				switch ($min_value_counts[0]) {
					case 'negativ':

						$newplayer->gametype = 'negativ';
						$newplayer->save();
						return View::make('game-n', array('newplayer' => $newplayer));

						break;
					
					case 'positiv':

						$newplayer->gametype = 'positiv';
						$newplayer->save();
						return View::make('game-p', array('newplayer' => $newplayer));

						break;
					
					case 'neutral':

						$newplayer->gametype = 'neutral';
						$newplayer->save();
						return View::make('game', array('newplayer' => $newplayer));

						break;
					
					default:
						# code...
						break;
				}
			}else{
				$newplayer->gametype = 'positiv';
				$newplayer->save();
				return View::make('game-p', array('newplayer' => $newplayer));

			}
			break;
			
			case 'neutral':
			if($counts[$max_value_counts[0]] - $counts[$min_value_counts[0]] > 1){
				switch ($min_value_counts[0]) {
					case 'negativ':

						$newplayer->gametype = 'negativ';
						$newplayer->save();
						return View::make('game-n', array('newplayer' => $newplayer));

						break;
					
					case 'positiv':

						$newplayer->gametype = 'positiv';
						$newplayer->save();
						return View::make('game-p', array('newplayer' => $newplayer));

						break;
					
					case 'neutral':

						$newplayer->gametype = 'neutral';
						$newplayer->save();
						return View::make('game', array('newplayer' => $newplayer));
						break;
					
					default:
						# code...
						break;
				}
			}else{

				$newplayer->gametype = 'neutral';
				$newplayer->save();
				return View::make('game', array('newplayer' => $newplayer));
			}
			break;
		}

		
		

	}

	public function writedata()
	{
		$level = new Level;
		$level->score = Input::get('taskTimes');
		$level->mistakes = Input::get('mistakes');
		$level->hits = Input::get('hits');
		$level->info = Input::get('info');
		$level->player_id = Input::get('player');
		$level->save();
		return View::make('empty');
	}	


	public function midquestions()
	{
		$questionnaire = Questionnaire::where('name', '=', 'mittel')->first();
		$toanswer = Question::where('questionnaire_id', '=', $questionnaire->id)->get();
		$playerid = Input::get('player'); 
		return View::make('midquestions', array('toanswer' => $toanswer, 'player' => $playerid ));
	}	
	public function midquestionsdone()
	{
		$questionnaire = Questionnaire::where('name', '=', 'mittel')->first();
		$questions = Question::where('questionnaire_id', '=', $questionnaire->id)->get();
		$playerid = Input::get('player'); 
		foreach ($questions as $q) {
			$answer = new Answer;
			$answername = 'field' . $q->id;
			$answer->answer = Input::get($answername);
			$answer->player_id = $playerid;
			$answer->question_id = $q->id;
			$answer->questionnaire_id = $questionnaire->id;
			$answer->save();
		}
		return View::make('empty');
	}	


	public function end()
	{
		$player_id = Input::get('player');
		$player = Player::find($player_id);		
		$player->save();
		$questionnaire = Questionnaire::where('name', '=', 'end')->first();
		$toanswer = Question::where('questionnaire_id', '=', $questionnaire->id)->get();
		return View::make('endquestions', array('toanswer' => $toanswer, 'player' => $player_id));
	}	
	public function enddone()
	{
		$questionnaire = Questionnaire::where('name', '=', 'end')->first();
		$questions = Question::where('questionnaire_id', '=', $questionnaire->id)->get();
		$playerid = Input::get('player'); 
		foreach ($questions as $q) {
			$answer = new Answer;
			$answername = 'field' . $q->id;
			$answer->answer = Input::get($answername);
			$answer->player_id = $playerid;
			$answer->question_id = $q->id;
			$answer->questionnaire_id = $questionnaire->id;
			$answer->save();
		}
		return View::make('test', array('player' => $playerid));
	}	

	public function endtest()
	{
		$questions = Question::where('questionnaire_id', '=', $questionnaire->id)->get();
		$playerid = Input::get('player'); 
		foreach ($questions as $q) {
			$answer = new Answer;
			$answername = 'field' . $q->id;
			$answer->answer = Input::get($answername);
			$answer->player_id = $playerid;
			$answer->question_id = $q->id;
			$answer->questionnaire_id = $questionnaire->id;
			$answer->save();
		}
		return View::make('test', array('player' => $playerid));
	}	

	public function endtestdone()
	{
		$score = 0;
		if(Input::get('aenlich1') == "Ähnlichkeit"){
			$score = $score+1;
		}
		if(Input::get('geschlossenheit1') == "Geschlossenheit"){
			$score = $score+1;
		}
		if(Input::get('praegnanz1') == "Prägnanz"){
			$score = $score+1;
		}
		if(Input::get('fortsetzung1') == "Fortsetzung"){
			$score = $score+1;
		}
		if(Input::get('aenlich2') == "Ähnlichkeit"){
			$score = $score+1;
		}
		if(Input::get('geschlossenheit2') == "Geschlossenheit"){
			$score = $score+1;
		}
		if(Input::get('praegnanz2') == "Prägnanz"){
			$score = $score+1;
		}
		if(Input::get('fortsetzung2') == "Fortsetzung"){
			$score = $score+1;
		}
		$player = Player::find(Input::get('player'));
		$player->endtestscore = $score;
		$player->save();
		return View::make('thanks', array('player' => $player->id));
	}	




	//Admin Controller
	public function adminstart()
	{
		return View::make('adminstart');
	}	

	public function admin()
	{
		$quests = Questionnaire::all();
		$quest = Questionnaire::all()->first();
		$questions = Question::where('questionnaire_id', '=', $quest->id)->get();
		return View::make('admin2', array('quests' => $quests, 'quest' => $quest, 'questions' => $questions));
	}	

	public function adminchange()
	{
		$quests = Questionnaire::all();
		$select = Input::get('selection');
		$quest = Questionnaire::where('name', '=', $select)->first();
		$questions = Question::where('questionnaire_id', '=', $quest->id)->get();
		return View::make('admin2', array('quests' => $quests, 'quest' => $quest, 'questions' => $questions));
	}	

	public function adminNeueFrage()
	{
		
		$qid = Input::get("qid");
		$quest =  Questionnaire::where('id', '=', $qid)->first();
		$newQuestion = new Question;
		$newQuestion->question = Input::get('neueFrage');
		$newQuestion->questionnaire_id = $qid;
		$newQuestion->save();

		$toanswer = Question::all();
		return Redirect::to('adminstart/admin');
	}

	public function adminBearbeite()
	{
		$qid = Input::get("qid");
		$questions = Question::where('questionnaire_id', '=', $qid)->get();
		foreach ($questions as $q) {
			$q->questionnaire_id = $qid;
			$fieldname = "field".$q->id;
			$q->question =Input::get($fieldname);
			$q->save();
			if(($q->question) == "x"){
				$q->delete();
			}
		}
		$questions = Question::where('questionnaire_id', '=', $qid)->get();
		return Redirect::to('adminstart/admin');
	}

	public function results(){

		$players = Player::all();
		$answers = Answer::all();
		$questions = Question::all();
		return View::make('results', array('players' => $players, 'answers' => $answers, 'questions' => $questions));
	}
	public function resultsonly(){
		$answers = Answer::all();
		$questions = Question::all();
		return View::make('resultsonly', array('answers' => $answers, 'questions' => $questions));
	}	





	public function questionsdone(){
		$questions = Question::all();
		$playerid = Input::get('player'); 
		foreach ($questions as $q) {
			$answer = new Answer;
			$answername = 'field' . $q->id;
			$answer->answer = Input::get($answername);
			$answer->player_id = $playerid;
			$answer->question_id = $q->id;
			$answer->save();
		}
		return View::make('thanks');
	}
	public function statistics(){

		$counts = [
			"negativ" => Player::where('gametype','=', 'negativ')->count(),
			"positiv" => Player::where('gametype','=', 'positiv')->count(),
			"neutral" => Player::where('gametype','=', 'neutral')->count()
		];
			echo "Anzahl aktuell: n " . $counts["negativ"] . ' p ' . $counts["positiv"] ." neutral " . $counts['neutral'] . '<br>'
			."<br>"."Anzahl 1: " .' negativ '. Player::where('gametype','=', 'negativ')->where('type','=',"1")->count().' neutral '.  Player::where('gametype','=', 'neutral')->where('type','=',"1")->count() .' positiv '. Player::where('gametype','=', 'positiv')->where('type','=',"1")->count() 
			."<br>"."Anzahl 2: " .' negativ '. Player::where('gametype','=', 'negativ')->where('type','=',"2")->count().' neutral '.  Player::where('gametype','=', 'neutral')->where('type','=',"2")->count() .' positiv '. Player::where('gametype','=', 'positiv')->where('type','=',"2")->count() 
			."<br>"."Anzahl 3: " .' negativ '. Player::where('gametype','=', 'negativ')->where('type','=',"3")->count().' neutral '.  Player::where('gametype','=', 'neutral')->where('type','=',"3")->count() .' positiv '. Player::where('gametype','=', 'positiv')->where('type','=',"3")->count() 
			."<br>"."Anzahl 4: " .' negativ '. Player::where('gametype','=', 'negativ')->where('type','=',"4")->count().' neutral '.  Player::where('gametype','=', 'neutral')->where('type','=',"4")->count() .' positiv '. Player::where('gametype','=', 'positiv')->where('type','=',"4")->count() 
			."<br>"."Anzahl 5: " .' negativ '. Player::where('gametype','=', 'negativ')->where('type','=',"5")->count().' neutral '.  Player::where('gametype','=', 'neutral')->where('type','=',"5")->count() .' positiv '. Player::where('gametype','=', 'positiv')->where('type','=',"5")->count() 
			."<br>"."Anzahl 6: " .' negativ '. Player::where('gametype','=', 'negativ')->where('type','=',"6")->count().' neutral '.  Player::where('gametype','=', 'neutral')->where('type','=',"6")->count() .' positiv '. Player::where('gametype','=', 'positiv')->where('type','=',"6")->count() 
			."<br>"."Anzahl 7: " .' negativ '. Player::where('gametype','=', 'negativ')->where('type','=',"7")->count().' neutral '.  Player::where('gametype','=', 'neutral')->where('type','=',"7")->count() .' positiv '. Player::where('gametype','=', 'positiv')->where('type','=',"7")->count() 
			."<br>"."Anzahl 8: " .' negativ '. Player::where('gametype','=', 'negativ')->where('type','=',"8")->count().' neutral '.  Player::where('gametype','=', 'neutral')->where('type','=',"8")->count() .' positiv '. Player::where('gametype','=', 'positiv')->where('type','=',"8")->count() 
			
			 ;
	}


}

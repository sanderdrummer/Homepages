<?php

class HomeController extends BaseController {


	//Player Controller
	public function playerstart()
	{
		
		$players = Player::all();
		return View::make('welcome', array('players' => $players));
	}	


	public function playername(){

		$eingang =  Questionnaire::where('name', '=', 'eingang')->first();

		$newplayer = new Player;
		$newplayer->gender = Input::get('gender');
		$newplayer->age = Input::get('age');
		$newplayer->save();
		return View::make('game', array('newplayer' => $newplayer));
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
	
	public function midquestions()
	{
		$questionnaire = Questionnaire::where('name', '=', 'mittel')->first();
		$toanswer = Question::where('questionnaire_id', '=', $questionnaire->id)->get();
		return View::make('midquestions', array('toanswer' => $toanswer));
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


}

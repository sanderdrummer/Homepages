<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		// $this->call('UserTableSeeder');
		$this->call('MyAppSeeder');

	}

}

class MyAppSeeder extends Seeder {

	public function run(){
		DB::table('Players')->delete();
		DB::table('Questions')->delete();
		DB::table('Questionnaires')->delete();
		DB::table('Answers')->delete();

		$kim = Questionnaire::create(array('name' => 'kim'));

		$frage1 = Question::create(array('question' => 'Das Spiel hat mir Spass gemacht','questionnaire_id' => $kim->id));  

		$playerJustus = Player::create(array('gender' => 'm','age' => '21','computer' => '4','game' => '3','questionnaire_id' => $kim->id));
		
		$Testfrage = Answer::create(array('answer' => 'Test','player_id' => $playerJustus->id,'question_id' => $frage1->id));
		
		

	}
}
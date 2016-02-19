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
		DB::table('Level')->delete();

		$eingang = Questionnaire::create(array('name' => 'eingang'));
		$mittel = Questionnaire::create(array('name' => 'mittel'));
		$end = Questionnaire::create(array('name' => 'end'));
		$test = Questionnaire::create(array('name' => 'test'));

		$level = Level::create(array('score' => 1,'mistakes' => 10,'hits' => 2,'info' => 'info'));
		
		$test1 = Question::create(array('question' => '1','questionnaire_id' => $test->id));  
		$test2 = Question::create(array('question' => '2','questionnaire_id' => $test->id));  
		$test3 = Question::create(array('question' => '3','questionnaire_id' => $test->id));  
		$test4 = Question::create(array('question' => '4','questionnaire_id' => $test->id));  
		
		$eingang1 = Question::create(array('question' => 'Ich spiele häufig Computerspiele','questionnaire_id' => $eingang->id));  
		$eingang1 = Question::create(array('question' => 'Ich kenne die Gestaltgesetze','questionnaire_id' => $eingang->id));  

		$frage1 = Question::create(array('question' => 'Das Spiel hat mir Spass gemacht','questionnaire_id' => $end->id));  		
		$fam1 = Question::create(array('question' => 'Ich mag solche Rätsel und Knobeleien','questionnaire_id' => $end->id));  
		$fam15 = Question::create(array('question' => 'Ich glaube, der Schwierigkeit dieses Spiels gewachsen zu sein','questionnaire_id' => $end->id));  
		$fam16 = Question::create(array('question' => 'Wahrscheinlich werde ich das Spiel nicht schaffen.','questionnaire_id' => $end->id));  
		$fam1 = Question::create(array('question' => 'Bei dem Spiel mag ich die Rolle des Wissenschaftlers, der Zusammenhänge entdeckt.','questionnaire_id' => $end->id));  
		$fam2 = Question::create(array('question' => 'Das Spiel ist eine richtige Herausforderung für mich.','questionnaire_id' => $end->id));  
		$fam3 = Question::create(array('question' => 'Nach dem Lesen der Instruktion erscheint mir das Spiel sehr interessant.','questionnaire_id' => $end->id));  
		$fam4 = Question::create(array('question' => 'Ich bin sehr gespannt darauf, wie gut ich hier abschneiden werde.','questionnaire_id' => $end->id));  
		$fam5 = Question::create(array('question' => 'Ich fürchte mich ein wenig davor, dass ich mich hier blamieren könnte','questionnaire_id' => $end->id));  
		$fam6 = Question::create(array('question' => 'Ich bin fest entschlossen, mich bei diesem Spiel voll anzustrengen.','questionnaire_id' => $end->id));  
		$fam7 = Question::create(array('question' => 'Bei Spielen wie diesem brauche ich keine Belohnung, sie machen mir auch so viel Spaß. ','questionnaire_id' => $end->id));  
		$fam8 = Question::create(array('question' => 'Es ist mir etwas peinlich, hier zu versagen.','questionnaire_id' => $end->id));  
		$fam9 = Question::create(array('question' => 'Ich glaube, dass kann jeder schaffen','questionnaire_id' => $end->id));  
		$fam10 = Question::create(array('question' => 'Ich glaube, ich schaffe dieses Spiel nicht','questionnaire_id' => $end->id));  
		$fam11 = Question::create(array('question' => 'Wenn ich das Spiel schaffe, werde ich schon ein wenig stolz auf meine Tüchtigkeit sein.','questionnaire_id' => $end->id));  
		$fam12 = Question::create(array('question' => 'Wenn ich an das Spiel denke, bin ich etwas beunruhigt.','questionnaire_id' => $end->id));  
		$fam13 = Question::create(array('question' => 'Eine solches Spiel würde ich auch in meiner Freizeit spielen.','questionnaire_id' => $end->id));  
		$fam14 = Question::create(array('question' => 'Die konkreten Leistungsanforderungen hier lähmen mich.','questionnaire_id' => $end->id));  
		
		$frage1 = Question::create(array('question' => 'Das Spiel hat mir Spass gemacht','questionnaire_id' => $mittel->id));  		
		$fammid1 = Question::create(array('question' => 'Ich mag solche Rätsel und Knobeleien','questionnaire_id' => $mittel->id));  
		$fammid15 = Question::create(array('question' => 'Ich glaube, der Schwierigkeit dieses Spiels gewachsen zu sein','questionnaire_id' => $mittel->id));  
		$fammid16 = Question::create(array('question' => 'Wahrscheinlich werde ich das Spiel nicht schaffen.','questionnaire_id' => $mittel->id));  
		$fammid1 = Question::create(array('question' => 'Bei dem Spiel mag ich die Rolle des Wissenschaftlers, der Zusammenhänge entdeckt.','questionnaire_id' => $mittel->id));  
		$fammid2 = Question::create(array('question' => 'Das Spiel ist eine richtige Herausforderung für mich.','questionnaire_id' => $mittel->id));  
		$fammid3 = Question::create(array('question' => 'Nach dem Lesen der Instruktion erscheint mir das Spiel sehr interessant.','questionnaire_id' => $mittel->id));  
		$fammid4 = Question::create(array('question' => 'Ich bin sehr gespannt darauf, wie gut ich hier abschneiden werde.','questionnaire_id' => $mittel->id));  
		$fammid5 = Question::create(array('question' => 'Ich fürchte mich ein wenig davor, dass ich mich hier blamieren könnte','questionnaire_id' => $mittel->id));  
		$fammid6 = Question::create(array('question' => 'Ich bin fest entschlossen, mich bei diesem Spiel voll anzustrengen.','questionnaire_id' => $mittel->id));  
		$fammid7 = Question::create(array('question' => 'Bei Spielen wie diesem brauche ich keine Belohnung, sie machen mir auch so viel Spaß. ','questionnaire_id' => $mittel->id));  
		$fammid8 = Question::create(array('question' => 'Es ist mir etwas peinlich, hier zu versagen.','questionnaire_id' => $mittel->id));  
		$fammid9 = Question::create(array('question' => 'Ich glaube, dass kann jeder schaffen','questionnaire_id' => $mittel->id));  
		$fammid10 = Question::create(array('question' => 'Ich glaube, ich schaffe dieses Spiel nicht','questionnaire_id' => $mittel->id));  
		$fammid11 = Question::create(array('question' => 'Wenn ich das Spiel schaffe, werde ich schon ein wenig stolz auf meine Tüchtigkeit sein.','questionnaire_id' => $mittel->id));  
		$fammid12 = Question::create(array('question' => 'Wenn ich an das Spiel denke, bin ich etwas beunruhigt.','questionnaire_id' => $mittel->id));  
		$fammid13 = Question::create(array('question' => 'Eine solches Spiel würde ich auch in meiner Freizeit spielen.','questionnaire_id' => $mittel->id));  
		$fammid14 = Question::create(array('question' => 'Die konkreten Leistungsanforderungen hier lähmen mich.','questionnaire_id' => $mittel->id));  
	}
}
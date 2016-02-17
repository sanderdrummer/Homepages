<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAnswersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('Answers', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('answer');
			$table->integer('question_id');
			$table->integer('questionnaire_id');
			$table->integer('player_id');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('Answers');
	}

}

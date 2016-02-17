<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlayerTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('Players', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('gender');
			$table->string('age');
			$table->string('computer');
			$table->string('game');
			$table->string('score');
			$table->integer('questionnaire_id');
			
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
		Schema::drop('Player');
	}

}

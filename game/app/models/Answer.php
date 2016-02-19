<?php
class Answer extends Eloquent{

	protected $fillable = array('answer','player_id','question_id');

	public function question() {
		return $this -> belongsTo('Question');
	}
	public function player() {
		return $this -> belongsTo('Player');
	}

	

} 
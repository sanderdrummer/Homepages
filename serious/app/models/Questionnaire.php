<?php
class Questionnaire extends Eloquent{

	protected $fillable = array('name');

	public function question() {
		return $this -> hasMany('Question');
	}
	public function questionnaires() {
		return $this->belongsToMany('Players', 'player_questionnaires', 'player_id', 'questionnaire_id');
	}


} 
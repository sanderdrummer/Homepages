<?php
class Player extends Eloquent{

	protected $fillable = array('gender','age','score','mistakes','hits');

	public function questionnaires() {
		return $this->belongsToMany('Questionnaire', 'player_questionnaires', 'questionnaire_id', 'player_id');
	}
} 
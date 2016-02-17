<?php
class Question extends Eloquent{

	protected $fillable = array('question','questionnaire_id');

	public function player() {
		return $this -> belongsTo('Questionnaire');
	}



} 
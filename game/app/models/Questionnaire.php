<?php
class Questionnaire extends Eloquent{

	protected $fillable = array('name');

	public function question() {
		return $this -> hasMany('Question');
	}


} 
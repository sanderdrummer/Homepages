<?php
class Player extends Eloquent{

	protected $fillable = array('gender','semester', 'type', 'gametype','endtestscore');

	public function answers() {
		return $this -> hasMany('Answer');
	}
	public function levels() {
		return $this -> hasMany('Level');
	}
} 
<?php
class Level extends Eloquent{
	protected $table = 'level';

	protected $fillable = array('score','mistakes','hits','info','player_id');

	public function player() {
		return $this -> belongsTo('Player');
	}



} 
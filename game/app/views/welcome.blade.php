@extends('layout')

@section('content')

	<div class="container">
		<div class="row">
		
			<div class="col-sm-12">
				<h1>Hallo</h1>
				<h2>Willkommen zu meiner Studie zum Thema Serious Games:</h2>
			</div>
		</div>	
		<div class="row">
		
			<div class="col-sm-12">
				<h3>Was erwartet dich?</h3>
				<p>
				Mein für diese Studie erstelltes Jump and Run Adventure Spiel.	
				</p>
				<p>Das Spiel enthält ein Tutorial, so dass du alle nötigen Spielkonzepte lernst und ausprobieren kannst
				während du spielst.</p>
				<img style="width:100%;" class="img-repsonsive" src="assets/img/screen.jpg" style="">

				<h3>Was kann ich dabei lernen?</h3>
				<p>Das Spiel vermittelt dir vier elementare Gestaltgesetze der Wahrnehmung. Ein Gestaltgesetz bezeichnet die Art des Zusammenschlusses von erlebten Teilen zu einer erlebten Ganzheit.</p>
				<img style="max-width:100%;" src="http://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Nocube.svg/395px-Nocube.svg.png">
				<p>Als Beispiel siehst du hier diesen Würfel.</p>
				<p>Die Kanten des Würfels sind imaginär. Sie werden nur von unserem Gehirn erzeugt.</p>
				<p>Die Gestaltgesetze beschreiben derartige Phänomene.</p>
				<p>Sie helfen dabei ein gut durchdachtes Design zu entwerfen und digitale Medien gut strukturiert und leicht begreifbar zu machen.</p>
				<p></p>
			</div>
		</div>		

		<div class="row">
		
			<div class="col-sm-12">
			<h3>Tips zum Spiel</h3>
			<ol>
				<br><li>1. Hängst du irgendwo fest kannst du jede Spielwelt mit der Taste -r- (reset) neu starten. </li>
				<br><li>2. Nach 10 und 20 Minuten wird automatisch ein Test eingeblendet.<br>
					Nachdem du einen Test beendet hast klicke einmal beliebig auf das Spielfeld um das Spiel fortzusetzen.</li>
				<br><li>3. Es spielt keine Rolle wie weit du kommst oder wie gut du spielst.</li>

			</ol>
			</div>
		</div>
		<div class="row">
		
			<div class="col-sm-12">
			<h3>Jetzt musst du nur noch die unten aufgeführten Felder ausfüllen und das Spiel kann los gehen:</h3>

			</div>
		</div>
		<form method="get" action="player">
		<div class="row">
			<hr>
			<div class="col-sm-3">	
				<p>Geschlecht:</p>			
					<select id="gender" name="gender" class="form-control">
				   		<option>weiblich</option>
				   		<option>männlich</option>
				 	</select>

			</div>
			<div class="col-sm-3">
			<p>aktuelles Semester:</p>
					<div class="form-group">
					   <input type="text" class="form-control" name="semester" placeholder="1">
					</div>
			</div>
			<div class="col-sm-3">
						
			</div>
		</div>
		@foreach($eingang->question as $q)
		<div class="row">
		<hr>
			<div class="col-sm-5">
				<p>{{$q->question}}</p>
			</div>
			<div class="col-sm-5">
			<select name="q{{$q->id}}" class="selectbox form-control">
				  <option value="1">1 Trifft nicht zu</option>
				  <option value="2">2</option>
				  <option value="3">3</option>
				  <option value="4">4</option>
				  <option value="5">5</option>
				  <option value="6">6</option>
				  <option value="7">7 Trifft zu</option>

				</select>
			</div>
			</div>
		@endforeach	
			<hr>
			 <button type="submit" id="submit"class="btn btn-lg btn-default">und Los gehts !</button>
		</form>
	</div>

@stop
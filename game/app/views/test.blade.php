@extends('layout')

@section('content')

	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h1>Zum Abschluss beantworte bitte noch folgende Fragen:</h1>
			</div>
		</div>
		<form method="post" action="player/end/test/done">
					<div class="row"  style="margin-bottom:15px;">

						<div class="col-sm-6">
							<img class="img-responsive" src="assets/img/Gestaltgesetze/aehnlichkeit.png">
							<br>
							<select name="aenlich1" class="form-control">
							  <option>Ähnlichkeit</option>
							  <option>Fortsetzung</option>
							  <option>Prägnanz</option>
							  <option>Geschlossenheit</option>
							</select>
						</div>						
						<div class="col-sm-6">
							<img class="img-responsive" src="assets/img/Gestaltgesetze/praegnanz.png">
							<br>
							<select name="praegnanz1" class="form-control">
							  <option>Ähnlichkeit</option>
							  <option>Fortsetzung</option>
							  <option>Prägnanz</option>
							  <option>Geschlossenheit</option>
							</select>
						</div>
					</div>
					<hr>
					<div class="row"  style="margin-bottom:15px;">

						<div class="col-sm-6">
							<img class="img-responsive" src="assets/img/Gestaltgesetze/geschlossenheit.png">
							<br>
							<select name="geschlossenheit1" class="form-control">
							  <option>Ähnlichkeit</option>
							  <option>Fortsetzung</option>
							  <option>Prägnanz</option>
							  <option>Geschlossenheit</option>
							</select>
						</div>						
						<div class="col-sm-6">
							<img class="img-responsive" src="assets/img/Gestaltgesetze/fortsetzung.png">
							<br>
							<select name="fortsetzung1" class="form-control">
							  <option>Ähnlichkeit</option>
							  <option>Fortsetzung</option>
							  <option>Prägnanz</option>
							  <option>Geschlossenheit</option>
							</select>
						</div>
					</div>
					<hr>
					<div class="row"  style="margin-bottom:15px;">

						<div class="col-sm-6">
							<img class="img-responsive" src="assets/img/Gestaltgesetze/praegnanz2.png">
							<br>
							<select name="praegnanz2" class="form-control">
							  <option>Ähnlichkeit</option>
							  <option>Fortsetzung</option>
							  <option>Prägnanz</option>
							  <option>Geschlossenheit</option>
							</select>
						</div>
						<div class="col-sm-6">
							<img class="img-responsive" src="assets/img/Gestaltgesetze/aehnlichkeit2.png">
							<br>
							<select name="aenlich2" class="form-control">
							  <option>Ähnlichkeit</option>
							  <option>Fortsetzung</option>
							  <option>Prägnanz</option>
							  <option>Geschlossenheit</option>
							</select>
						</div>						
					</div>
					<hr>
					<div class="row"  style="margin-bottom:15px;">

						<div class="col-sm-6">
							<img class="img-responsive" src="assets/img/Gestaltgesetze/fortsetzung2.png">
							<br>
							<select name="fortsetzung2" class="form-control">
							  <option>Ähnlichkeit</option>
							  <option>Fortsetzung</option>
							  <option>Prägnanz</option>
							  <option>Geschlossenheit</option>
							</select>
						</div>
						<div class="col-sm-6">
							<img class="img-responsive" src="assets/img/Gestaltgesetze/geschlossenheit2.png">
							<br>
							<select name="geschlossenheit2" class="form-control">
							  <option>Ähnlichkeit</option>
							  <option>Fortsetzung</option>
							  <option>Prägnanz</option>
							  <option>Geschlossenheit</option>
							</select>
						</div>						
					</div>
					<hr>
				
					 <input style="opacity:0" type="text" class="form-control" id="" placeholder="" name="player" value="{{$player}}">
					 <button type="submit" id="submit" class="btn btn-default">Fragebogen Abschicken</button>
				</form>


	</div>
@stop
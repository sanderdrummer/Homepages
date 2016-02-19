@extends('layout')

@section('content')

	<div class="container">
	<h1>Fragebogen Auswahl</h1>
		<form method="post">
			<div class="form-group">
				<select  id="gender" name="selection" class="form-control">
				@foreach ($quests as $qio)
					<option>{{$qio->name}}</option>
				@endforeach
			 	</select>
		 	</div>
		 	<button type="submit" id="submit"class="btn btn-lg btn-default">Fragebogen wechseln</button>
		</form>
		
		<div class="row" style="margin-top:150px">
			<h1>Fragebogen {{$quest->name}}</h1>
			<div class="col-sm-6">
			<h2>Fragen</h2>
			<hr>
				<form action="admin/bearbeite">

					<input style="display:none" type="text" class="form-control input-lg" name="qid" value="{{$quest->id}}">
					<ul>
					@foreach ($questions as $q)
						@if ($q->questionnaire_id == $quest->id)
						<li>
							<div class="form-group">
								<input type="text" class="form-control input-lg" name="field{{$q->id}}" placeholder="{{ $q->question }}" value="{{ $q->question }}">
							</div>
						</li>
						@endif
					@endforeach	
					
					</ul>
					<ul>
						<li><button type="submit" id="submit"class="btn btn-lg btn-default">Änderung speichern</button></li>
					</ul>
					
				</form>
			</div>
			<div class="col-sm-6">
				<h2>Neue Frage erstellen</h2>
				<hr>
				<form method="get" action="admin/neuefrage">
					<input style="display:none" type="text" class="form-control input-lg" name="qid" value="{{$quest->id}}">
					<div class="form-group">
						<input type="text" class="form-control input-lg" name="neueFrage" placeholder="neue Frage">
					</div>
					<button type="submit" id="submit2"class="btn btn-lg btn-default">Frage Speichern</button>
				</form>
			</div>
		</div>

		<div class="row">
			<div class="col-sm-12">
				<hr>
				<a href="../adminstart"><h2>zurück zur Auswahl</h2></a>	
			</div>
		</div>

	</div>
@stop


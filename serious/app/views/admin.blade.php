@extends('layout')

@section('content')

	<div class="container">
		@foreach ($quest as $qio)
		<div class="row" style="margin-top:150px">
			<h1>Fragebogen {{$qio->name}}</h1>
			<div class="col-sm-6">
			<h2>Fragen</h2>
			<hr>
				<form action="admin/bearbeite">

					<input type="text" class="form-control input-lg" name="qid" value="{{$qio->id}}">
					<ul>
					@foreach ($toanswer as $q)
						@if ($q->questionnaire_id == $qio->id)
						<li>
							<div class="form-group">
								<input type="text" class="form-control input-lg" name="field{{$q->id}}-{{$qio->id}}" placeholder="{{ $q->question }}" value="{{ $q->question }}">
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
					<input type="text" class="form-control input-lg" name="qid" value="{{$qio->id}}">
					<div class="form-group">
						<input type="text" class="form-control input-lg" name="neueFrage" placeholder="neue Frage">
					</div>
					<button type="submit" id="submit2"class="btn btn-lg btn-default">Frage Speichern</button>
				</form>
			</div>
		</div>
		@endforeach
		<div class="row">
			<div class="col-sm-12">
				<hr>
				<a href="../adminstart"><h2>zurück zur Auswahl</h2></a>	
			</div>
		</div>

	</div>
@stop


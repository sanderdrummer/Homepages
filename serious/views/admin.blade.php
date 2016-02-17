@extends('layout')

@section('content')

	<div class="container">
		<div class="row">
			<div class="col-sm-6">
			<h2>Fragen</h2>
			<hr>
				<form action="admin/bearbeite">
					<ul>
					@foreach ($toanswer as $q)
						<li>
								<div class="form-group">
									<input type="text" class="form-control input-lg" name="field{{$q->id}}" placeholder="{{ $q->question }}" value="{{ $q->question }}">
								</div>
							

						</li>
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


@extends('layout')

@section('content')

	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<h1>Ergebnisse</h1>
				<a href="../results"><h2>Ergebnisse nach Spielern</h2></a>
				<hr>
				<ul>

					@foreach ($questions as $q)
						<li class="spacer">
							@foreach ($answers as $a)
								@if ($q->id == $a->question_id)
									<p>{{$q->question}}:{{$a->answer}}</p>
								@endif
							@endforeach
									
						</li>		
					@endforeach	
							
					
				</ul>

			</div>
		</div>	
		<div class="row">
			<div class="col-sm-12">
				<hr>
				<a href="../../adminstart"><h2>zurück zur Auswahl</h2></a>	
			</div>
		</div>
	</div>
@stop


@extends('layout')

@section('content')

	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<h1>Ergebnisse nach Spielern</h1>
				<a href="results/only"><h2>nur Ergebnisse</h2></a>
				
				<ul>
					@foreach ($players as $p)
						<li class="spacer">
							<hr>
							<p>Geschlecht: {{$p->gender}}</p>
							<p>Alter: {{$p->age}}</p>
							<p>Computererfahrung: {{$p->computer}}</p>
							<p>Spieleerfahrung: {{$p->game}}</p>
							<p>Wertung:{{$p->scroe}}</p>
							<h4>Antworten:</h4>
							@foreach ($answers as $a)
								@if ($p->id == $a->player_id)
									@foreach ($questions as $q)
										@if ($q->id == $a->question_id)
											<p>{{$q->question}}:{{$a->answer}}</p>
										@endif
									@endforeach
									
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
				<a href="../adminstart"><h2>zurück zur Auswahl</h2></a>	
			</div>
		</div>
	</div>
@stop


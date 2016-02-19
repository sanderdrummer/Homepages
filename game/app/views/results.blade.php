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
							<p>ID: {{$p->id}}</p>
							<p>Geschlecht: {{$p->gender}}</p>
							<p>Spielertyp: {{$p->type}}</p>
							<p>Spieltyp: {{$p->gametype or '-'}}</p>
							<p>Semester: {{$p->semester or '-'}}</p>
							<p>Endtestscore: {{$p->endtestscore or '-'}}</p>
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
							<p>---------------------------------</p>
							Level:
							@foreach ($p->levels as $l)
							<p>Level Name: {{$l->info or ''}}</p>
							<p>Level Wertung: {{$l->score or ''}}</p>
							<p>Level Fehler: {{$l->mistakes or ''}}</p>
							<p>Level Treffer: {{$l->hits or ''}}</p>
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


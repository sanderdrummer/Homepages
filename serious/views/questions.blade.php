@extends('layout')

@section('content')

	<div class="container">
		<div class="row">
			<div class="col-sm-12">
			<p>Bitte beantworte noch folgende Fragen:</p>
			<hr>

			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<form method="get" action="player/questions/done">
					@foreach ($toanswer as $q)
					<div class="row"  style="margin-bottom:15px;">
						<div class="col-sm-5">
							<p>{{ $q->question }}</p>
						</div>
						<div class="col-sm-7">
							<select name="field{{$q->id}}" class="form-control">
							  <option>Trifft gar nicht zu</option>
							  <option>Trifft in etwa zu</option>
							  <option>Trifft voll zu</option>
							</select>
						</div>
					</div>
					@endforeach	
					<hr>
				
					<input style="opacity:0" type="text" class="form-control" id="" placeholder="" name="player" value="{{$newplayer->id}}">
					 <button type="submit" id="submit" class="btn btn-default">Fragebogen Abschicken</button>
				</form>

				


	
			</div>
		</div>

	</div>
@stop
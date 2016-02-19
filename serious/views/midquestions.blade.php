
	
<p>Bitte beantworte folgende Fragen:</p>

<fieldset>
	@foreach ($toanswer as $q)
	<div class="selectcontainer">
	<hr>	
			<p class="selectlabel">{{ $q->question }}</p>
		
			<select name="field{{$q->id}}" class="selectbox">
			  <option>Trifft gar nicht zu</option>
			  <option>Trifft in etwa zu</option>
			  <option>Trifft voll zu</option>
			</select>
		
	</div>
	@endforeach	
	

	<input style="opacity:0" type="text" class="form-control" id="" placeholder="" name="player" value="">
	<button type="submit" id="submit" class="btn btn-default">Und weiter gehts!</button>
</fieldset>

<script type="text/javascript">

	$('#submit').click(function(){
		var playerid = $('input[name=saveplayer]').val(); 
		$('input[name=player]').val(playerid);

		var baseUrl = 'http://player.tp-itservice.com/'
			$.ajax({
			    type: "POST",
			    url : baseUrl+"player/midquestions/done",
			    data :$( 'fieldset' ).serialize(),
			    success : function(data){
			        $('#text').slideUp(500);
			        $('#text').html("");

			    }
			},"json");
	});

</script>	


</div>

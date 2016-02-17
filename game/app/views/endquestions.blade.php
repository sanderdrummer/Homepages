
<p>Bitte beantworte folgende Fragen:</p>

<fieldset>
	<input style="display:none" type="text" name="player" value="{{$player}}">

	@foreach ($toanswer as $q)
	<div class="selectcontainer">
	<hr>	
			<p class="selectlabel">{{ $q->question }}</p>

			<select name="field{{$q->id}}" class="selectbox">
			  <option>1 Trifft nicht zu</option>
			  <option>2 </option>
			  <option>3</option>
			  <option>4 </option>
			  <option>5 </option>
			  <option>6 </option>
			  <option>7 Trifft zu</option>
			</select>
		
	</div>
	@endforeach	
	

	<input style="opacity:0" type="text" class="form-control" id="" placeholder="" name="player" value="">
	<button type="submit" id="submit" class="btn btn-default">Und weiter gehts!</button>
</fieldset>

<script type="text/javascript">

	$('#submit').click(function(){
		var baseUrl = $('#url').html();
			$.ajax({
			    type: "POST",
			    url : baseUrl+"/end/done",
			    data :$( 'fieldset' ).serialize(),
			    success : function(data){
			        $('#text').slideUp(500);
			        $('body').html(data);
			    }
			},"json");
	});

</script>	

</div>

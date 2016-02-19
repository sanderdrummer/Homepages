@extends('layout')

@section('content')

	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h1>Hallo</h1>
				<h2>kurz bevor es losgeht benötige ich noch einige Informationen:</h2>
			</div>
		</div>
		<form method="post">
		<div class="row">
			<hr>
			<div class="col-sm-3">
				
					<select id="gender" name="gender" class="form-control">
				   		<option id="genderlabel">Geschlecht:</option>
				   		<option>männlich</option>
				 	</select>
				

			</div>
			<div class="col-sm-3">
					<div class="form-group">
					   <input type="text" class="form-control" name="age" placeholder="Alter">
					</div>
			</div>
			<div class="col-sm-3">
						
			</div>
		</div>
		<div class="row">
		<hr>
			<div class="col-sm-3">
				<p>Mit Computern kenne ich mich sehr gut aus</p>
			</div>
			<div class="col-md-2">
			  <div class="radio">
			      <label>
			        <input type="radio" name="computer" value="1">
			          1 trifft gar nicht zu
			        </label>
			    </div>
			</div>
			<div class="col-md-1">
			  <div class="radio">
			      <label>
			        <input type="radio" name="computer" value="2">
			          2
			        </label>
			    </div>
			</div>
			<div class="col-md-1">
			  <div class="radio">
			      <label>
			        <input type="radio" name="computer" value="3">
			          3
			        </label>
			    </div>
			</div>
			<div class="col-md-1">
			  <div class="radio">
			      <label>
			        <input type="radio" name="computer" value="4" checked>
			          4
			        </label>
			    </div>
			</div>
			<div class="col-md-1">
			  <div class="radio">
			      <label>
			        <input type="radio" name="computer" value="5">
			          5
			        </label>
			    </div>
			</div>
			<div class="col-md-1">
			  <div class="radio">
			      <label>
			        <input type="radio" name="computer" value="6">
			          6
			        </label>
			    </div>
			</div>
			<div class="col-md-2">
			  <div class="radio">
			      <label>
			        <input type="radio" name="computer" value="7">
			          7 trifft ganz zu
			        </label>
			    </div>
			</div>
		</div>

		<div class="row">
		<hr>
			<div class="col-sm-3">
				<p>Mit Computerspielen kenne ich mich sehr gut aus</p>
			</div>
			<div class="col-md-2">
			  <div class="radio">
			      <label>
			        <input type="radio" name="computerspiele" value="1">
			          1 trifft gar nicht zu
			        </label>
			    </div>
			</div>
			<div class="col-md-1">
			  <div class="radio">
			      <label>
			        <input type="radio" name="computerspiele" value="2">
			          2
			        </label>
			    </div>
			</div>
			<div class="col-md-1">
			  <div class="radio">
			      <label>
			        <input type="radio" name="computerspiele" value="3">
			          3
			        </label>
			    </div>
			</div>
			<div class="col-md-1">
			  <div class="radio">
			      <label>
			        <input type="radio" name="computerspiele" value="4" checked>
			          4
			        </label>
			    </div>
			</div>
			<div class="col-md-1">
			  <div class="radio">
			      <label>
			        <input type="radio" name="computerspiele" value="5">
			          5
			        </label>
			    </div>
			</div>
			<div class="col-md-1">
			  <div class="radio">
			      <label>
			        <input type="radio" name="computerspiele" value="6">
			          6
			        </label>
			    </div>
			</div>
			<div class="col-md-2">
			  <div class="radio">
			      <label>
			        <input type="radio" name="computerspiele" value="7">
			          7 trifft ganz zu
			        </label>
			    </div>
			</div>
		</div>
			<hr>
			 <button type="submit" id="submit"class="btn btn-lg btn-default">und Los gehts !</button>
		</form>
	</div>
	<script type="text/javascript">
		$('#gender').click(function(){
			$('#genderlabel').html('weiblich');
		});
	</script>
@stop
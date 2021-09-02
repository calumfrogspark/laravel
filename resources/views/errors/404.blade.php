@extends('layouts.master')

@section('title', 'Page Not Found!')

@section('content')

<section>
  <div class="container">
    <h1>Page not found!</h1>
    <a href="<?php echo url()->previous(); ?>">Return</a>
  </div>
</section>

@stop

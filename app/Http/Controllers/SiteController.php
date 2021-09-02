<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use Hash;
use Session;
use DB;
use Mail;
use App\Document;
use App\DocumentVersion;

class SiteController extends Controller {

  public function getHomePage(Request $request) {
    //$documents = Document::all();
    $var = "";
    return view('home', ['data' => $var]);
  }
  
}
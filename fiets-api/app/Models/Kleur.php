<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kleur extends Model
{
    protected $fillable = ['naam'];

    // Als je de naam van de tabel anders hebt genoemd in de database, zet dat hier
    protected $table = 'kleuren';
}
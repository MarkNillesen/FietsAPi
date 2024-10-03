<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kleur extends Model
{
    protected $fillable = ['naam'];

    // Zet timestamps uit
    public $timestamps = false;  // Dit zorgt ervoor dat 'created_at' en 'updated_at' niet automatisch worden beheerd

    // Als je de naam van de tabel anders hebt genoemd in de database, zet dat hier
    protected $table = 'kleuren';
}
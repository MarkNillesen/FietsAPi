<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kleur extends Model
{
    protected $fillable = ['naam'];

    public $timestamps = false;

    protected $table = 'kleuren';
}
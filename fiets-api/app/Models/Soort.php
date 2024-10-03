<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Soort extends Model
{
    protected $fillable = ['naam'];

    public $timestamps = false;

    protected $table = 'soorten';
}

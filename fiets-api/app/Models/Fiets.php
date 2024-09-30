<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fiets extends Model
{
    protected $fillable = ['merk', 'kleur_id'];

    public function kleur()
    {
        return $this->belongsTo(Kleur::class);
    }

    protected $table = 'fietsen';
}

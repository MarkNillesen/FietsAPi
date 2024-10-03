<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fiets extends Model
{
    use HasFactory;

    protected $fillable = ['naam', 'kleur_id', 'soort_id', 'geslacht_id', 'merk_id'];

    public function kleur()
    {
        return $this->belongsTo(Kleur::class);
    }

    public function geslacht()
    {
        return $this->belongsTo(Geslacht::class); // Dit moet het juiste model zijn
    }

    public function soort()
    {
        return $this->belongsTo(Soort::class); // Dit moet het juiste model zijn
    }

    public function merk()
    {
        return $this->belongsTo(Merk::class); // Dit moet het juiste model zijn
    }

    protected $table = 'fietsen';
}

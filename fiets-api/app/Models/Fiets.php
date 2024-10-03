<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fiets extends Model
{
    use HasFactory;

    protected $fillable = ['naam', 'kleur_id'];
    
    public $timestamps = false;

    public function kleur()
    {
        return $this->belongsTo(Kleur::class);
    }

    public function Geslacht()
    {
        return $this->belongsTo(Kleur::class);
    }

    public function Soort()
    {
        return $this->belongsTo(Kleur::class);
    }

    public function Merk()
    {
        return $this->belongsTo(Kleur::class);
    }

    protected $table = 'fietsen';
}

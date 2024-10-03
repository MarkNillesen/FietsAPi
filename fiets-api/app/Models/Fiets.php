<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fiets extends Model
{
    use HasFactory;

    protected $fillable = ['merk', 'kleur_id'];
    
    // Zet timestamps uit
    public $timestamps = false;  // Dit zorgt ervoor dat 'created_at' en 'updated_at' niet automatisch worden beheerd

    public function kleur()
    {
        return $this->belongsTo(Kleur::class);
    }

    protected $table = 'fietsen';
}

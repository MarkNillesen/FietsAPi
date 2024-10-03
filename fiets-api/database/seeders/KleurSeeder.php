<?php

namespace Database\Seeders;

use App\Models\Kleur;
use Illuminate\Database\Seeder;

class KleurSeeder extends Seeder
{
    public function run()
    {
        Kleur::create(['naam' => 'Rood']);
        Kleur::create(['naam' => 'Blauw']);
        Kleur::create(['naam' => 'Groen']);
        Kleur::create(['naam' => 'Geel']);
        Kleur::create(['naam' => 'Oranje']);
        Kleur::create(['naam' => 'Paars']);
        Kleur::create(['naam' => 'Roze']);
        Kleur::create(['naam' => 'Bruin']);
        Kleur::create(['naam' => 'Zwart']);
        Kleur::create(['naam' => 'Wit']);
        Kleur::create(['naam' => 'Grijs']);
        Kleur::create(['naam' => 'Turquoise']);
        Kleur::create(['naam' => 'Lichtblauw']);
        Kleur::create(['naam' => 'Lichtgroen']);
        Kleur::create(['naam' => 'Donkerblauw']);
        Kleur::create(['naam' => 'Donkergroen']);
        Kleur::create(['naam' => 'Beige']);
        Kleur::create(['naam' => 'Bordeaux']);
        Kleur::create(['naam' => 'Zilver']);
        Kleur::create(['naam' => 'Goud']);
    }
}

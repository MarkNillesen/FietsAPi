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
    }
}

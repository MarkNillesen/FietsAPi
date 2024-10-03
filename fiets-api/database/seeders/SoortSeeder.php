<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Soort;

class SoortSeeder extends Seeder
{
    public function run(): void
    {
        Soort::create(['naam' => 'Stadsfiets']);
        Soort::create(['naam' => 'Racefiets']);
        Soort::create(['naam' => 'Mountainbike']);
        Soort::create(['naam' => 'Elektrische fiets']);
        Soort::create(['naam' => 'Vouwfiets']);
        Soort::create(['naam' => 'Hybride fiets']);
        Soort::create(['naam' => 'Bakfiets']);
        Soort::create(['naam' => 'Kinderfiets']);
        Soort::create(['naam' => 'Tandem']);
        Soort::create(['naam' => 'Transportfiets']);
        Soort::create(['naam' => 'Fatbike']);
        Soort::create(['naam' => 'Tourfiets']);
    }
}
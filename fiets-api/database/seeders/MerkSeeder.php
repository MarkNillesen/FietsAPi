<?php

namespace Database\Seeders; 

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Merk;

class MerkSeeder extends Seeder
{
    public function run(): void
    {
        Merk::create(['naam' => 'Gazelle']);
        Merk::create(['naam' => 'Batavus']);
        Merk::create(['naam' => 'Cortina']);
        Merk::create(['naam' => 'Sparta']);
        Merk::create(['naam' => 'Koga']);
        Merk::create(['naam' => 'Giant']);
        Merk::create(['naam' => 'Trek']);
        Merk::create(['naam' => 'Cube']);
        Merk::create(['naam' => 'Specialized']);
        Merk::create(['naam' => 'Cannondale']);
        Merk::create(['naam' => 'Bianchi']);
        Merk::create(['naam' => 'Scott']);
        Merk::create(['naam' => 'Merida']);
        Merk::create(['naam' => 'Raleigh']);
        Merk::create(['naam' => 'Focus']);
        Merk::create(['naam' => 'Orbea']);
        Merk::create(['naam' => 'VanMoof']);
        Merk::create(['naam' => 'Stevens']);
        Merk::create(['naam' => 'Pinarello']);
    }
}


<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Geslacht;

class GeslachtSeeder extends Seeder
{
    public function run(): void
    {
        Geslacht::create(['naam' => 'Heren']);
        Geslacht::create(['naam' => 'Dames']);
        Geslacht::create(['naam' => 'Kinderen']);
    }
}

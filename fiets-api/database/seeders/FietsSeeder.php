<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Fiets;
use Faker\Factory as Faker;

class FietsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $aantalFietsen = 50;

        for ($i = 0; $i < $aantalFietsen; $i++) {
            Fiets::create([
                'naam' => $faker->word(),
                'kleur_id' => rand(1, 20),
                'merk_id' => rand(1, 19),
                'geslacht_id' => rand(1, 3),
                'soort_id' => rand(1, 12),
            ]);
        }
    }
}

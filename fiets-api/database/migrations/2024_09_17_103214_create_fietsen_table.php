<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('fietsen', function (Blueprint $table) {
            $table->id();
            $table->string('naam');
            $table->foreignId('kleur_id')->constrained('kleuren');
            $table->foreignId('soort_id')->constrained('soorten');
            $table->foreignId('geslacht_id')->constrained('geslachten');
            $table->foreignId('merk_id')->constrained('merken');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fietsen');
    }
};

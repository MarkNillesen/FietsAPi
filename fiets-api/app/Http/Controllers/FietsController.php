<?php

namespace App\Http\Controllers;

use App\Models\Fiets;
use Illuminate\Http\Request;

class FietsController extends Controller
{
    public function index()
    {
        return Fiets::with('kleur')->get(); // Haal alle fietsen op met bijbehorende kleur
    }

    public function store(Request $request)
    {
        $request->validate([
            'merk' => 'required|string',
            'kleur_id' => 'required|exists:kleuren,id',
        ]);

        return Fiets::create($request->all());
    }

    public function show(Fiets $fiets)
    {
        return $fiets->load('kleur'); // Haal een specifieke fiets op met de kleur
    }

    public function update(Request $request, Fiets $fiets)
    {
        $request->validate([
            'merk' => 'required|string',
            'kleur_id' => 'required|exists:kleuren,id',
        ]);

        $fiets->update($request->all());

        return $fiets;
    }

    public function destroy(Fiets $fiets)
    {
        $fiets->delete();
        return response()->noContent();
    }
}

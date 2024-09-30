<?php
namespace App\Http\Controllers;

use App\Models\Kleur;
use Illuminate\Http\Request;

class KleurController extends Controller
{
    public function index()
    {
        return Kleur::all(); // Haal alle kleuren op
    }

    public function store(Request $request)
    {
        $request->validate([
            'naam' => 'required|string',
        ]);

        return Kleur::create($request->all());
    }

    public function show(Kleur $kleur)
    {
        return $kleur; // Haal een specifieke kleur op
    }

    public function update(Request $request, Kleur $kleur)
    {
        $request->validate([
            'naam' => 'required|string',
        ]);

        $kleur->update($request->all());

        return $kleur;
    }

    public function destroy(Kleur $kleur)
    {
        $kleur->delete();
        return response()->noContent();
    }
}

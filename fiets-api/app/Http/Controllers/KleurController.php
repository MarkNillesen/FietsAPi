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
        // Valideer de inkomende aanvraag
        $request->validate([
            'naam' => 'required|string',
        ]);

        // Maak een nieuwe kleur aan
        $kleur = Kleur::create($request->all());

        return response()->json($kleur, 201); // Geef de nieuw aangemaakte kleur terug
    }

    public function show(Kleur $kleur)
    {
        return $kleur; // Haal een specifieke kleur op
    }

    public function update(Request $request, $id)
    {
        $kleur = Kleur::find($id);
        if ($kleur) {
            $kleur->naam = $request->input('naam');
            $kleur->save();
            return response()->json(['message' => 'Kleur succesvol bijgewerkt.']);
        } else {
            return response()->json(['message' => 'Kleur niet gevonden.'], 404);
        }
    }

    public function destroy($id)
    {
        $kleur = Kleur::find($id);
        if ($kleur) {
            $kleur->delete();
            return response()->json(['message' => 'Kleur succesvol verwijderd.'], 200);
        } else {
            return response()->json(['message' => 'Kleur niet gevonden.'], 404);
        }
    }
}

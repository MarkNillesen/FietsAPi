<?php

namespace App\Http\Controllers;

use App\Models\Soort; // Zorg ervoor dat je het juiste model importeert
use Illuminate\Http\Request;

class SoortController extends Controller
{
    // Haal alle soorten op
    public function index()
    {
        return Soort::all();
    }

    // Haal een specifieke soort op
    public function show($id)
    {
        $soort = Soort::findOrFail($id);
        return response()->json($soort);
    }

    // Maak een nieuwe soort aan
    public function store(Request $request)
    {
        // Valideer de inkomende request data
        $request->validate([
            'naam' => 'required|string|max:255', // Valideer de naam
        ]);

        // Maak de soort aan
        $soort = Soort::create($request->all());
        return response()->json(['message' => 'Soort succesvol aangemaakt.', 'soort' => $soort], 201);
    }

    // Update een bestaande soort
    public function update(Request $request, $id)
    {
        $soort = Soort::find($id);
        if ($soort) {
            // Valideer de inkomende request data
            $request->validate([
                'naam' => 'sometimes|required|string|max:255', // Valideer de naam
            ]);

            // Werk de soort bij
            $soort->update($request->all());
            return response()->json(['message' => 'Soort succesvol bijgewerkt.', 'soort' => $soort]);
        } else {
            return response()->json(['message' => 'Soort niet gevonden.'], 404);
        }
    }

    // Verwijder een soort
    public function destroy($id)
    {
        $soort = Soort::find($id);
        if ($soort) {
            $soort->delete();
            return response()->json(['message' => 'Soort succesvol verwijderd.'], 200);
        } else {
            return response()->json(['message' => 'Soort niet gevonden.'], 404);
        }
    }
}

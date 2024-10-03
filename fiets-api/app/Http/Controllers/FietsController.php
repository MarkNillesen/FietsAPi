<?php

namespace App\Http\Controllers;

use App\Models\Fiets;
use Illuminate\Http\Request;

class FietsController extends Controller
{
    // Haal alle fietsen op met hun bijbehorende kleuren, merken, soorten en geslachten
    public function index()
    {
        return Fiets::with(['kleur', 'merk', 'soort', 'geslacht'])->get();
    }

    // Haal een specifieke fiets op
    public function show($id)
    {
        $fiets = Fiets::with(['kleur', 'merk', 'soort', 'geslacht'])->findOrFail($id);
        return response()->json($fiets);
    }

    // Maak een nieuwe fiets aan
    public function store(Request $request)
    {
        // Valideer de inkomende request data
        $request->validate([
            'merk_id' => 'required|exists:merken,id',
            'kleur_id' => 'required|exists:kleuren,id',
            'soort_id' => 'required|exists:soorten,id',
            'geslacht_id' => 'required|exists:geslachten,id',
            'naam' => 'required|string|max:255', // Voeg hier een naam toe, indien van toepassing
        ]);

        // Maak de fiets aan
        $fiets = Fiets::create($request->all());
        return response()->json(['message' => 'Fiets succesvol aangemaakt.', 'fiets' => $fiets], 201);
    }

    // Update een bestaande fiets
    public function update(Request $request, $id)
    {
        $fiets = Fiets::find($id);
        if ($fiets) {
            // Valideer de inkomende request data
            $request->validate([
                'merk_id' => 'sometimes|required|exists:merken,id',
                'kleur_id' => 'sometimes|required|exists:kleuren,id',
                'soort_id' => 'sometimes|required|exists:soorten,id',
                'geslacht_id' => 'sometimes|required|exists:geslachten,id',
                'naam' => 'sometimes|required|string|max:255', // Voeg hier een naam toe, indien van toepassing
            ]);

            // Werk de fiets bij
            $fiets->update($request->all());
            return response()->json(['message' => 'Fiets succesvol bijgewerkt.', 'fiets' => $fiets]);
        } else {
            return response()->json(['message' => 'Fiets niet gevonden.'], 404);
        }
    }

    // Verwijder een fiets
    public function destroy($id)
    {
        $fiets = Fiets::find($id);
        if ($fiets) {
            $fiets->delete();
            return response()->json(['message' => 'Fiets succesvol verwijderd.'], 200);
        } else {
            return response()->json(['message' => 'Fiets niet gevonden.'], 404);
        }
    }
}
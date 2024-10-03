<?php

namespace App\Http\Controllers;

use App\Models\Merk; // Zorg ervoor dat je het juiste model importeert
use Illuminate\Http\Request;

class MerkController extends Controller
{
    // Haal alle merken op
    public function index()
    {
        return Merk::all();
    }

    // Haal een specifiek merk op
    public function show($id)
    {
        $merk = Merk::findOrFail($id);
        return response()->json($merk);
    }

    // Maak een nieuw merk aan
    public function store(Request $request)
    {
        // Valideer de inkomende request data
        $request->validate([
            'naam' => 'required|string|max:255', // Valideer de naam
        ]);

        // Maak het merk aan
        $merk = Merk::create($request->all());
        return response()->json(['message' => 'Merk succesvol aangemaakt.', 'merk' => $merk], 201);
    }

    // Update een bestaand merk
    public function update(Request $request, $id)
    {
        $merk = Merk::find($id);
        if ($merk) {
            // Valideer de inkomende request data
            $request->validate([
                'naam' => 'sometimes|required|string|max:255', // Valideer de naam
            ]);

            // Werk het merk bij
            $merk->update($request->all());
            return response()->json(['message' => 'Merk succesvol bijgewerkt.', 'merk' => $merk]);
        } else {
            return response()->json(['message' => 'Merk niet gevonden.'], 404);
        }
    }

    // Verwijder een merk
    public function destroy($id)
    {
        $merk = Merk::find($id);
        if ($merk) {
            $merk->delete();
            return response()->json(['message' => 'Merk succesvol verwijderd.'], 200);
        } else {
            return response()->json(['message' => 'Merk niet gevonden.'], 404);
        }
    }
}

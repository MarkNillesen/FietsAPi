<?php

namespace App\Http\Controllers;

use App\Models\Geslacht;
use Illuminate\Http\Request;

class GeslachtController extends Controller
{
    // Haal alle geslachten op
    public function index()
    {
        return Geslacht::all();
    }

    // Haal een specifiek geslacht op
    public function show($id)
    {
        $geslacht = Geslacht::findOrFail($id);
        return response()->json($geslacht);
    }

    // Maak een nieuw geslacht aan
    public function store(Request $request)
    {
        // Valideer de inkomende request data
        $request->validate([
            'naam' => 'required|string|max:255', // Valideer de naam
        ]);

        // Maak het geslacht aan
        $geslacht = Geslacht::create($request->all());
        return response()->json(['message' => 'Geslacht succesvol aangemaakt.', 'geslacht' => $geslacht], 201);
    }

    // Update een bestaand geslacht
    public function update(Request $request, $id)
    {
        $geslacht = Geslacht::find($id);
        if ($geslacht) {
            // Valideer de inkomende request data
            $request->validate([
                'naam' => 'sometimes|required|string|max:255', // Valideer de naam
            ]);

            // Werk het geslacht bij
            $geslacht->update($request->all());
            return response()->json(['message' => 'Geslacht succesvol bijgewerkt.', 'geslacht' => $geslacht]);
        } else {
            return response()->json(['message' => 'Geslacht niet gevonden.'], 404);
        }
    }

    // Verwijder een geslacht
    public function destroy($id)
    {
        $geslacht = Geslacht::find($id);
        if ($geslacht) {
            $geslacht->delete();
            return response()->json(['message' => 'Geslacht succesvol verwijderd.'], 200);
        } else {
            return response()->json(['message' => 'Geslacht niet gevonden.'], 404);
        }
    }
}
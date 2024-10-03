<?php

namespace App\Http\Controllers;

use App\Models\Fiets;
use Illuminate\Http\Request;

class FietsController extends Controller
{
    // Haal alle fietsen op met hun bijbehorende kleuren
    public function index()
    {
        return Fiets::with('kleur')->get();
    }

    // Haal een specifieke fiets op
    public function show($id)
    {
        $fiets = Fiets::with('kleur')->findOrFail($id);
        return response()->json($fiets);
    }

    // Update een fiets
    public function store(Request $request)
    {
        // Log de inkomende request data
    
        $request->validate([
            'merk' => 'required|string',
            'kleur_id' => 'required|exists:kleuren,id',
        ]);
    
        return Fiets::create($request->all());
    }

    public function update(Request $request, $id)
{
    $fiets = Fiets::find($id);
    if ($fiets) {
        $fiets->merk = $request->input('merk');
        $fiets->kleur_id = $request->input('kleur_id');
        $fiets->save();
        return response()->json(['message' => 'Fiets succesvol bijgewerkt.']);
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

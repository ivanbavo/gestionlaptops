<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class ClientesController extends Controller
{
    public function index(Request $request)
    {
        $clientes = Cliente::all();

        return response()->json(['data' => $clientes]);
    }
}
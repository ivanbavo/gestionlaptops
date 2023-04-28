<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;
use App\Models\Alquiler;
use App\Models\Asesor;
use App\Models\UnidadXAlquiler;
use App\Models\UnidadDeAlquiler;


class AlquileresController extends Controller
{
    public function index(Request $request)
    {
        //$UnidadesXAlquiler =UnidadXAlquiler::with('empresa', 'asesor','unidadesDeAlquiler')->get();
        $unidadesxalquiler = UnidadxAlquiler::with('alquiler.empresa','alquiler.asesor', 'unidadDeAlquiler')->get();
        $unidadesDeAlquiler = UnidadDeAlquiler::all();
        $clientes = Cliente::all();
        $asesores = Asesor::all();
        

        return response()->json(['unidadesxalquiler' => $unidadesxalquiler, 'clientes' => $clientes, 'asesores' => $asesores, 'unidadesDeAlquiler' => $unidadesDeAlquiler]);
    }

    public function create(Request $request)
    {   
        $user_id = auth()->user()->id;
        $alquiler = new Alquiler();
        $alquiler->id_empresa = $request->id_empresa;
        $alquiler->id_asesor = $request->id_asesor;
        $alquiler->fecha_inicio = $request->fecha_inicio;
        $alquiler->fecha_fin = $request->fecha_fin;
        $alquiler->estado = 'CREADO';
        $alquiler->observaciones = $request->observaciones;
        $alquiler->created_by = $user_id;
        $alquiler->updated_by = $user_id;
        $alquiler->save();

        $unidadesxalquiler = $request->id_unidadesDeAlquiler;
        foreach ($unidadesxalquiler as $unidadId) {
            $unidadxalquiler = new UnidadXAlquiler();
            $unidadxalquiler->id_alquiler = $alquiler->id;
            $unidadxalquiler->id_laptop = $unidadId;
            $unidadxalquiler->save();
        }

        return response()->json(['alquiler' => $alquiler]);
    }
    public function destroy(Request $request)
    {
        $alquiler = Alquiler::find($request->id);
        $unidadesxalquiler = UnidadXAlquiler::where('id_alquiler', $alquiler->id)->get();

        foreach ($unidadesxalquiler as $unidadxalquiler) {
            $unidadxalquiler->delete();
        }
        $alquiler->delete();
        return response()->json(['alquiler' => $alquiler]);
    }
    public function update(Request $request)
    {
        $alquiler = Alquiler::find($request->id);
        $alquiler->id_empresa = $request->id_empresa;
        $alquiler->id_asesor = $request->id_asesor;
        $alquiler->fecha_inicio = $request->fecha_inicio;
        $alquiler->fecha_fin = $request->fecha_fin;
        $alquiler->observaciones = $request->observaciones;
        $alquiler->save();
        $nuevas_unidadesxAlquiler= $request->id_unidadesDeAlquiler;
        $unidades_antiguas = UnidadXAlquiler::select('id_laptop')->where('id_alquiler', $request->id)->pluck('id_laptop')->toArray();
        $unidades_nuevas = $nuevas_unidadesxAlquiler;
        $eliminar_unidades = array_diff($unidades_antiguas, $unidades_nuevas);
        foreach($eliminar_unidades as $id_laptop){
            $unidades_x_alquiler = UnidadXAlquiler::where('id_laptop', $id_laptop)
                                           ->where('id_alquiler', $request->id)
                                           ->delete();
        }
        $agregar_unidades = array_diff($unidades_nuevas, $unidades_antiguas);
        foreach($agregar_unidades as $id_laptop){
            $unidad_x_alquiler = new UnidadXAlquiler;
            $unidad_x_alquiler->id_laptop = $id_laptop;
            $unidad_x_alquiler->id_alquiler = $request->id;
            $unidad_x_alquiler->save();
        }

        return response()->json(['alquiler' => $alquiler]);
    }

    public function alquileresPorEmpresa(Request $request)
    {
        $unidadesByEmpresa = UnidadXAlquiler::with('alquiler.empresa', 'alquiler.asesor', 'unidadDeAlquiler')
        ->whereHas('alquiler', function ($query) use ($request) {
            $query->where('id_empresa', $request->id_empresa);
        })
        ->get();

        return response()->json(['unidadesByEmpresa' => $unidadesByEmpresa]);
    }
}
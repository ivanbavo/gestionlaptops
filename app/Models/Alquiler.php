<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alquiler extends Model
{
    protected $table = 'alquileres';

    public function empresa()
    {
        return $this->belongsTo(Cliente::class, 'id_empresa');
    }

    public function asesor()
    {
        return $this->belongsTo(Asesor::class, 'id_asesor');
    }

    public function unidadesDeAlquiler()
    {
        return $this->hasManyThrough(UnidadDeAlquiler::class, UnidadxAlquiler::class, 'id_alquiler', 'id', 'id', 'id_laptop');
    }

    public function unidadesxalquiler()
    {
        return $this->hasMany(UnidadxAlquiler::class, 'id_alquiler');
    }
}

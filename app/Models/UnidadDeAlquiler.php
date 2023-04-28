<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnidadDeAlquiler extends Model
{
    protected $table = 'unidad_de_alquiler';

    public function unidadesxalquiler()
    {
        return $this->hasMany(UnidadxAlquiler::class, 'id_laptop');
    }
    
}

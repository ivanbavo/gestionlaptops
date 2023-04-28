<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnidadXAlquiler extends Model
{
    protected $table = 'unidadesxalquiler';

    public function alquiler()
    {
        return $this->belongsTo(Alquiler::class, 'id_alquiler');
    }

    public function unidadDeAlquiler()
    {
        return $this->belongsTo(UnidadDeAlquiler::class, 'id_laptop');
    }
}

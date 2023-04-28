<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asesor extends Model
{
    protected $table = 'asesores';

    public function alquileres()
    {
        return $this->hasMany(Alquiler::class, 'id_asesor');
    }
}

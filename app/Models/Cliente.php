<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{

    protected $fillable = [
        'empresa',
        'sector',
        'tamanio',
        'contacto',
        'correo',
        'celular',
    ];

    public function alquileres()
    {
        return $this->hasMany(Alquiler::class, 'id_empresa');
    }
}

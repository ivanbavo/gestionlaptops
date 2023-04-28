<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('alquileres', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('id_empresa');
            $table->unsignedBigInteger('id_asesor');
            $table->date('fecha_inicio');
            $table->date('fecha_fin');
            $table->string('estado', 50);
            $table->text('observaciones')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->onUpdate('CURRENT_TIMESTAMP');
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->foreign('id_empresa')->references('id')->on('clientes');
            $table->foreign('id_asesor')->references('id')->on('asesores');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alquileres');
    }
};

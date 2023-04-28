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
       
        Schema::create('unidad_de_alquiler', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('codigo',9);
            $table->string('tipo_ua', 20);
            $table->string('marca', 20);
            $table->string('procesador', 20);
            $table->integer('generacion')->unsigned();
            $table->string('serie', 16);
            $table->text('observaciones')->nullable();
            $table->boolean('en_alquiler')->default(false);
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->onUpdate('CURRENT_TIMESTAMP');
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('unidad_de_alquiler');
    }
};

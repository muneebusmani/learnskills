<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoryItem extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int,string>
     */
    protected $fillable = [
        'category_id',
        'name',
        'students_count',
    ];
}

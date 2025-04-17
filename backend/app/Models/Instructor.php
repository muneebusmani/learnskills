<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/Instructor.php
class Instructor extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int,string>
     */
    protected $fillable = [
        'name', 'title', 'image', 'rating', 'reviews', 'students', 'courses', 'bio',
    ];
}

// Other models (Section, Lecture, Review, Category, CategoryItem) with standard relationships

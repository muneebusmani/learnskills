<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Course extends Model
{
    /**
     * The attributes that should be cast.
     *
     * @var array<array-key,mixed>
     */
    protected $casts = [
        'learning_objectives' => 'array',
        'requirements' => 'array',
        'last_updated' => 'datetime',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected $fillable = [
        'title',
        'description',
        'category',
        'image',
        'rating',
        'rating_count',
        'student_count',
        'last_updated',
        'language',
        'subtitle_language',
        'price',
        'video_hours',
        'articles',
        'resources',
        'learning_objectives',
        'requirements',
        'description_headline',
        'description_intro',

    ];

    /** @return BelongsToMany<Instructor, Course, Pivot>  */
    public function instructors()
    {
        return $this->belongsToMany(Instructor::class);
    }

    /** @return HasMany<Section, Course>  */
    public function sections()
    {
        return $this->hasMany(Section::class);
    }

    /** @return HasMany<Review, Course>  */
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->enum('category', ['package', 'individual', 'collage', 'language']);
            $table->string('image');
            $table->float('rating')->default(0);
            $table->integer('rating_count')->default(0);
            $table->integer('student_count')->default(0);
            $table->dateTime('last_updated');
            $table->string('language');
            $table->string('subtitle_language');
            $table->decimal('price', 8, 2);
            $table->string('video_hours');
            $table->integer('articles')->default(0);
            $table->integer('resources')->default(0);
            $table->json('learning_objectives');
            $table->json('requirements');
            $table->string('description_headline');
            $table->text('description_intro');
            $table->timestamps();
        });

        Schema::create('instructors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('title');
            $table->string('image');
            $table->float('rating')->default(0);
            $table->integer('reviews')->default(0);
            $table->integer('students')->default(0);
            $table->integer('courses')->default(0);
            $table->text('bio');
            $table->timestamps();
        });

        Schema::create('course_instructor', function (Blueprint $table) {
            $table->foreignId('course_id')->constrained();
            $table->foreignId('instructor_id')->constrained();
        });

        Schema::create('sections', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained();
            $table->string('title');
            $table->integer('lecture_count')->default(0);
            $table->string('total_duration');
            $table->timestamps();
        });

        Schema::create('lectures', function (Blueprint $table) {
            $table->id();
            $table->foreignId('section_id')->constrained();
            $table->string('title');
            $table->string('duration')->nullable();
            $table->string('type')->nullable();
            $table->string('pages')->nullable();
            $table->timestamps();
        });

        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained();
            $table->string('user_name');
            $table->integer('rating');
            $table->text('comment');
            $table->timestamps();
        });

        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->timestamps();
        });

        Schema::create('category_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained();
            $table->string('name');
            $table->integer('students_count')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('courses');
        Schema::dropIfExists('instructors');
        Schema::dropIfExists('course_instructor');
        Schema::dropIfExists('sections');
        Schema::dropIfExists('lectures');
        Schema::dropIfExists('reviews');
        Schema::dropIfExists('categories');
        Schema::dropIfExists('category_items');

    }
};

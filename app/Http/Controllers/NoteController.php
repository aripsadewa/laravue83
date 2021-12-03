<?php

namespace App\Http\Controllers;

use App\Models\Models\Note;
use App\Models\Models\Subject;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function store()
    {
        $subject = Subject::findOrFail(request('subject'));

        $note = Note::create([
            'subject_id' => $subject->id,
            'title' => request('title'),
            'slug' => \Str::slug(request('title')),
            'description' => request('description'),
        ]);

        return response()->json([
            'message' => 'Your note was created',
            'note' => $note,
        ]);
    }
}

<?php

namespace App\Services;

use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver as GdDriver;
// Or use this if you prefer Imagick:
// use Intervention\Image\Drivers\Imagick\Driver as ImagickDriver;

class FileService
{
    private ImageManager $manager;

    public function __construct()
    {
        $this->manager = new ImageManager(new GdDriver());
    }

    public function updateFile($model, $request, $type)
    {
        // First handle the existing file deletion
        if (!empty($model->file)) {
            $currentFile = public_path() . $model->file;

            if (file_exists($currentFile) && $currentFile != public_path() . '/user-placeholder.png') {
                unlink($currentFile);
            }
        }

        // Get the uploaded file
        $uploadedFile = $request->file('file');

        // Create the image instance using the new v3 syntax
        $image = $this->manager->read($uploadedFile);

        // Apply modifications based on type
        if ($type === "user") {
            // In v3, resize maintains aspect ratio by default
            // Use cover() for forced dimensions while maintaining aspect ratio
            $image = $image->cover(400, 400);
        }

        // Generate unique filename
        $extension = $uploadedFile->getClientOriginalExtension();
        $filename = time() . '.' . $extension;
        $targetPath = public_path() . '/file/' . $filename;

        // Save the image using v3 syntax
        $image->save($targetPath);

        // Update the model's file path
        $model->file = '/file/' . $filename;
        return $model;
    }
}

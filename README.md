<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

## Project Setup & Installation

To get started with a new laravel & nova project, you may follow the instructions outlined in this section.

1. Create a new directory using `mkdir <project name>`
2. Access that directory using `cd <newly created dir>`
3. Clone this repo into the current directory.
4. Run `mv laravel <newly created dir>`
5. Run `composer install`
6. Run `npm install`
7. Run `cp .sample.env .env`
8. Generate a new site key using `php artisan key:generate`
9. Edit your `.env` file to use the correct DB configuration.

### Nova

To get the nova install working inside the laravel project, do as follows:

1. Run the `composer update` command.
2. Next run the `php artisan nova:install` command, followed by the `php artisan migrate` command.
    - The `nova:install` command will install Nova's service provider and public assets withing the application.
3. After running these commands, verify that the `App\Providers\NovaServiceProvider` was added to the `providers` array in your `app.php` configuration file. If it was not, then you should add this manually!

### Updating Nova

To update the version of nova, downlaod a release Zip from the Nova website.

1. After downloading the release ZIP, replace the contents of you `nova` directory with the contents of the ZIP file.
2. After updating the directory contents, run the `composer update` command.
3. Then run the `php artisan nova:publish` command to publish the new nova assets, configuration and view files. This will **NOT** overwrite any of the pre-existing configurations for Nova.
    - If you wish to override the existing files, you may use the `--force` flag when running the command, as follows: `php artisan nova:publish --force && php artisan view:clear`.

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

-   [Simple, fast routing engine](https://laravel.com/docs/routing).
-   [Powerful dependency injection container](https://laravel.com/docs/container).
-   Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
-   Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
-   Database agnostic [schema migrations](https://laravel.com/docs/migrations).
-   [Robust background job processing](https://laravel.com/docs/queues).
-   [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

app.factory('teacherDataService', function ($resource) {
    return $resource('/api/posts/:id');
});
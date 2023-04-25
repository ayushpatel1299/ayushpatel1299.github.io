<<<<<<< Updated upstream:scripts/Patel-Activity15.js
$(document).ready(function(){
    $.ajax({
        url: 'facultyList.json', 
        dataType: 'json',
        success: function(data) {
            $.each(data.facultymembers, function(index, faculty) {
                var facultyDiv = $('<div>').addClass('faculty-member');
                var image = $('<img>').attr('src', faculty.image).appendTo(facultyDiv);
                var name = $('<h2>').text(faculty.full_name).appendTo(facultyDiv);
                var department = $('<p>').text(faculty.department).appendTo(facultyDiv);
                var bio = $('<p>').text(faculty.bio).appendTo(facultyDiv);
                $('#faculty').append(facultyDiv);
            });
        },
    });
});

=======
$(document).ready(function(){
    $.ajax({
        url: 'facultyList.json', 
        dataType: 'json',
        success: function(data) {
            $.each(data.facultymembers, function(index, faculty) {
                var facultyDiv = $('<div>').addClass('faculty-member');
                var image = $('<img>').attr('src', faculty.image).appendTo(facultyDiv);
                var name = $('<h2>').text(faculty.full_name).appendTo(facultyDiv);
                var department = $('<p>').text(faculty.department).appendTo(facultyDiv);
                var bio = $('<p>').text(faculty.bio).appendTo(facultyDiv);
                $('#faculty').append(facultyDiv);
            });
        },
    });
});

>>>>>>> Stashed changes:itis3135/scripts/Patel-Activity15.js

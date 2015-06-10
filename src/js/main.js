(function(window) {
    $.getJSON("../../api/github/users/octocat.json")
        .then(function(octocat) {
            console.log(octocat);

            $name = $('#name');
            $name.text(octocat.name);

            $avatar = $('img#avatar');
            $avatar.attr('src', octocat.avatar_url);

            $login = $('#login');
            $login.text(octocat.login);

            $location = $('#location');
            $location.text(octocat.location);

            $github = $('#github');
            $github.text(octocat.company);

// refactor
            // $email = $('a#e-mail');
            // $email.attr('href', 'mailto:' + octocat.email);
            //
            // $blog = $('a', '#blog');
            // $blog.attr('href', octocat.blog);

            $followers = $('#followers-count');
            $followers.text(octocat.followers);

            $following = $('#following-count');
            $following.text(octocat.following);


// refactor
            // $starred = $('#star-count');
            // $starred[octocat.starred_url].length;
            // just set it to
            // $('star-count') = octocat.starred_url.length;



        });


})(window);

(function(window) {
    $.getJSON("../../api/github/users/mstaehling.json")
        .then(function(mstaehling) {
            console.log(mstaehling);

            $name = $('#name');
            $name.text(mstaehling.name);

            $avatar = $('img#avatar');
            $avatar.attr('src', mstaehling.avatar_url);

            $login = $('#login');
            $login.text(mstaehling.login);

            // $location = $('#location');
            // $location.text(octocat.location);
            //
            // $github = $('#github');
            // $github.text(octocat.company);

// refactor
            // $email = $('a#e-mail');
            // $email.attr('href', 'mailto:' + octocat.email);
            //
            // $blog = $('a', '#blog');
            // $blog.attr('href', octocat.blog);

            $followers = $('#followers-count');
            $followers.text(mstaehling.followers);

            $following = $('#following-count');
            $following.text(mstaehling.following);


// refactor
            // $starred = $('#star-count');
            // $starred[octocat.starred_url].length;
            // just set it to
            // $('star-count') = octocat.starred_url.length;



        });
_.pluck("../../api/github/users/MStaehling/mstaehling-repos.json");
// _.every("../../api/github/users/MStaehling/mstaehling-repos.json", mstaehling.repos_url);
})(window);

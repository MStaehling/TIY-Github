(function(window) {
  // var $name = $('#name');
    $.getJSON("../../api/github/users/mstaehling.json")
        .then(function(mstaehling) {
            /**
             * Replacing placeholders with data from....?
             * @param
             * @return
             */
             var nameTpl = _.template($('.details').html());

             console.log(nameTpl({ 'mstaehling': mstaehling }));
             
             $('.details').html(nameTpl({ 'mstaehling': mstaehling }));


            // $name = $('#name');
            // $name.text(mstaehling.name);

            // $avatar = $('img#avatar');
            // $avatar.attr('src', mstaehling.avatar_url);
            //
            // $login = $('#login');
            // $login.text(mstaehling.login);

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

            // $followers = $('#followers-count');
            // $followers.text(mstaehling.followers);
            //
            // $following = $('#following-count');
            // $following.text(mstaehling.following);


            // refactor
            // $starred = $('#star-count');
            // $starred[octocat.starred_url].length;
            // just set it to
            // $('star-count') = octocat.starred_url.length;



        });
    $(function() {
        $('.tabs')
            /**
             * Event Listenener
             * - Listening for: click on 'a[href^=='#']'
             * - What element: .tabs (parent of the parent of the '<a>')
             * - What happens:event.preventDefault prevents the default behavior of an element
             */
            .on('click', 'a[href^='#
                ']',
                function(event) {
                    event.preventDefault();
                    $(this).add(this.hash).trigger('activate');

                    // return  false; // This is bad....does event.preventDefault() and event.stopPropagation()
                })

        /**
         * Event Listener:
         * - What event: activate on '.tabs li'
         * - What element: '.tabs'
         * - What happens:
         */
        .on('activate', 'li', activator)

        /**
         * activate the first '<li>' in '.tabs'
         */
        .children('li:first')
            .trigger('activate');

        function activator(event) {
            $(event.target) // '.tabs li' or 'event.target'
                .addClass('active');
            .siblings()
                .removeClass('active');
        }
        $('.panel')
            /**
             * Event Listener
             * - What event: 'activate' on '.panel'
             * - What element: '.panel'
             * - What happens:
             */

    })

    // _.pluck("../../api/github/users/MStaehling/mstaehling-repos.json", mstaehling.repos_url);
    // _.every("../../api/github/users/MStaehling/mstaehling-repos.json", mstaehling.repos_url);
})(window);

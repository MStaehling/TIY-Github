(function(window) {
  var app = angular.module('tiy-github', [ ]);

  app.controller('MainController', function($http){
    var self = this;
    

    $http.get("../../api/github/users/mstaehling.json")
    .success(function(user){
      console.log(arguments);

      self.user = user;
    })
    .then(function(response){
      console.log(response.data);
    })
  });

  // // Inside the magic of 'ng-controller'...
  // var MainController = app.controller('MainController');
  //
  // var app = new MainController({
  //   el: //whatever ng-controller is an attr of
  //   data: // whatever is attached to 'this' inside MainController
  // }); //new vue ({el....data....})


//     $.getJSON("../../api/github/users/mstaehling.json")
//         .then(function(mstaehling) {
//             console.log(mstaehling);
//
//             // $name = $('#name');
//             // $name.text(mstaehling.name);
//
//             $avatar = $('img#avatar');
//             $avatar.attr('src', mstaehling.avatar_url);
//
//             $login = $('#login');
//             $login.text(mstaehling.login);
//
//             // $location = $('#location');
//             // $location.text(octocat.location);
//             //
//             // $github = $('#github');
//             // $github.text(octocat.company);
//
// // refactor
//             // $email = $('a#e-mail');
//             // $email.attr('href', 'mailto:' + octocat.email);
//             //
//             // $blog = $('a', '#blog');
//             // $blog.attr('href', octocat.blog);
//
//             $followers = $('#followers-count');
//             $followers.text(mstaehling.followers);
//
//             $following = $('#following-count');
//             $following.text(mstaehling.following);


// refactor
            // $starred = $('#star-count');
            // $starred[octocat.starred_url].length;
            // just set it to
            // $('star-count') = octocat.starred_url.length;



        // });


})(window);

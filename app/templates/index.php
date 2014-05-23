<? require_once 'includes/init.php'; ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Color City</title>

    <meta name="viewport" content="width=device-width, user-scalable=no"> 
       
    <!-- build:css({.tmp,app}) assets/styles/main.css -->
    <link href="./assets/styles/main.css" rel="stylesheet">
    <!-- endbuild -->

    <!-- build:js scripts/libs/modernizr.js -->        
    <script src="./assets/bower_components/modernizr/modernizr.js"></script>
    <!-- endbuild -->

  </head>

  <body class="loading">
    <div id="wrapper">
        <!-- Global Header -->
        <header id="header">
            <hgroup id="logo">
                <h1><a href="#!/" class="ir">Color City</a></h1>
                <h2 class="ir">In Theaters and iTunes October 3rd</h2>
                <h3 class="ir">Coming from a crayon box near you</h3>
                <h6 class="ir">Christina Ricci</h6>
                <h6 class="ir">Rosie Perez</h6>
                <h6 class="ir">Wayne Brady</h6>
                <h6 class="ir">Craig Ferguson</h6>
            </hgroup>
            <div id="navigation">
                <ul>
                    <li class="video"><a class="ir sprite" href="#!/videos">Video Gallery</a></li>
                    <li class="about"><a class="ir sprite"  href="#!/about">About the Film</a></li>
                    <li class="characters"><a class="ir sprite"  href="#!/characters">Meet the Characters</a></li>
                    <li class="tickets"><a class="ir sprite"  href="#!/tickets">Get Tickets</a></li>
                    <li class="games"><a class="ir sprite"  href="#!/games">Games</a></li>
                </ul>
            </div>

            <div id="clouds">
                <div class="bg-left"></div>
                <div class="bg-right"></div>
                <div class="cloud green" style="left: 400px;"></div>
                <div class="cloud purple" style="left: -310px;"></div>
                <div class="cloud brown" style="left: 1000px;"></div>
            </div>   

        </header>
 

        <div id="gnat">
            <div class="character"></div>
        </div>

        <!-- Primary Content -->
        <div id="content"></div>

        <!-- Global Footer -->
        <footer id="footer">
            <div class="row">
                <div class="col col_1">
                    <h4 class="sprite ir logo   ">Magnolia</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique vitae neque et placerat. Donec mattis, massa sit amet aliquam cursus, ligula orci pharetra mauris, id mollis nisi magna tincidunt sem. Etiam ac cursus massa. Proin rhoncus mauris vel nibh dictum semper a a nibh. Quisque ut velit ut justo blandit molestie a eget purus. Donec eu varius magna, ut mattis purus. Proin eget consectetur sem, a fermentum risus. Donec sed est non nulla porttitor fermentum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique vitae neque et placerat. Donec mattis, massa sit amet aliquam cursus, ligula orci pharetra mauris, id mollis nisi magna tincidunt sem. Etiam ac cursus massa. Proin rhoncus mauris vel nibh dictum semper a a nibh. Quisque ut velit ut justo blandit molestie a eget purus. Donec eu varius magna, ut mattis purus. Proin eget consectetur sem, a fermentum risus. Donec sed est non nulla porttitor fermentum.</p>
                </div>
                <div class="col col_2">
                    <ul class="links info">
                        <li class="link"><a href="#" target="_blank">Press Kit</a></li>
                        <li class="link"><a href="#" target="_blank">About</a></li>
                        <li class="link"><a href="#" target="_blank">Contact</a></li>
                    </ul>
                    <br/>
                    <ul class="links social">
                        <li class="link facebook"><a href="#" class="ir sprite">Facebook</a></li>
                        <li class="link twitter"><a href="#" class="ir sprite">Twitter</a></li>
                        <li class="link google"><a href="#" class="ir sprite">Google+</a></li>
                        <li class="link pinterest"><a href="#" class="ir sprite">Pinterest</a></li>
                        <li class="link youtube"><a href="#" class="ir sprite">YouTube</a></li>
                    </ul>
                    <div class="copyright">
                        &copy;2001 - <?php echo date("Y")?>. Magnolia Pictures. All Rights Reeserved. Wagner/Cuban Companies.<br/>
                        For ratings reasons, go to <a href="#" target="_blank">FilmRatings.com</a>, <a href="#" target="_blank">MPAA.org</a> 
                    </div>
                </div>
            </div>
        </footer>
    </div><!-- /wrapper -->

    <!-- build:js scripts/vendor.js -->
    <script src="./assets/bower_components/jquery/jquery.js"></script>
    <script src="./assets/bower_components/underscore/underscore.js"></script>
    <script src="./assets/bower_components/backbone/backbone.js"></script>
    <script src="./assets/bower_components/layoutmanager/backbone.layoutmanager.js"></script>
    <script src="./assets/scripts/jquery.velocity.js"></script>
    <!-- endbuild -->

    <!-- build:js scripts/main.js -->
    <script src="src/components/plugins.js"></script>
    <script src="src/components/tracking.js"></script>
    <script src="src/components/share.js"></script> 
    <script src="src/router.js"></script>
    <script src="src/vent.js"></script>
    <script src="src/views/baseview.js"></script>
    <script src="src/views/error.js"></script>
    <script src="src/views/home.js"></script>
    <script src="src/views/videos.js"></script>
    <script src="src/views/about.js"></script>
    <script src="src/views/characters.js"></script>
    <script src="src/views/tickets.js"></script>
    <script src="src/main.js"></script>
    <!-- endbuild -->

  </body>
</html>
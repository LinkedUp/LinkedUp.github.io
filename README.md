<!DOCTYPE html>
    <html lang='en'>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Assignment 2</title>
            <!-- Keep wireframe.css for debugging, add your css to style.css -->
            <link id='wireframecss' type="text/css" rel="stylesheet" href="../wireframe.css" disabled>
            <link id='stylecss' type="text/css" rel="stylesheet" href="style.css">
            <script src='../wireframe.js'></script>
     
        </head>

        <body>
            
        <!--  CONTAINER  -->
        <div id = "container">
            <!--  HEADER  -->
            <div id = "header">
                <div id= "top_info"><img class="logo-img" src='../../media/popcorn-clipart-2'/></div>
                <div class="plate">
                    <p class="shadow text1">LUNARDO's</p>
                    <p class="shadow text2">CINEMA</p>
                    <p class="shadow text3">  CENTRE</p> 
                </div>
            </div>
                <!--  nav bar -->
            <div class="topnav" id="myTopnav">
                <a href="#home" class="active">Home</a>
                <a href="#About">About </a>
                <a href="#Prices">Prices</a>
                <a href="#Now Showing">Now Showing</a>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
            

            <!--  About  -->
            <div id= "About">
                <div id = "banner"> ABOUT US</div>
                <div id= "left_col">
                 <p> GRand re-opening of the Lunardo Cinema Centre this September 1st, including complete renovations and extensive improvements to enhance    the cinema experience direct at your home town.</p> 
                 <p> ALL NEW: seating for standard and exclusive reclining first class seating options</p>
                    
                    <p> BRAND NEW: newly introduced. Enjoy state of the art, dolly surround sound system to create a completely captivating cinematic experience for you and your friends or family</p>
                </div>
                  <div id= "right_col"> 
                    <img class="logo-img" src='../../media/prestige_open_with_light_kit'/>
                    <img class="logo-img" src='../../media/norm seat'/>
                  </div>    
            </div>
                

            <!--  Pricing  -->
            <div id= "Prices">
                <div id = "banner"> PRICING</div>
                <div id= "colomn"> <table class="tg">
                  <tr>
                    <th class="tg-0lax">Seat type</th>
                    <th class="tg-0lax">Seat Code</th>
                    <th class="tg-0lax">All day Monday and Wednesday AND 12pm on Weekdays</th>
                    <th class="tg-0lax">All other times</th>
                  </tr>
                  <tr>
                    <td class="tg-0lax">Standard Adult</td>
                    <td class="tg-0lax">STA </td>
                    <td class="tg-0lax">14.00</td>
                    <td class="tg-0lax">19.80&nbsp;&nbsp;17.50&nbsp;&nbsp;15.30&nbsp;&nbsp;30.00&nbsp;&nbsp;27.00&nbsp;&nbsp;24.00</td>
                  </tr>
                  <tr>
                    <td class="tg-0lax">Standard Concession</td>
                    <td class="tg-0lax">STP</td>
                    <td class="tg-0lax">12.50</td>
                    <td class="tg-0lax">17.50</td>
                  </tr>
                  <tr>
                    <td class="tg-0lax">Standard Child</td>
                    <td class="tg-0lax">STC</td>
                    <td class="tg-0lax">11.00</td>
                    <td class="tg-0lax">15.30</td>
                  </tr>
                  <tr>
                    <td class="tg-0lax">First Class Adult</td>
                    <td class="tg-0lax">FCA</td>
                    <td class="tg-0lax">24.00</td>
                    <td class="tg-0lax">30.00</td>
                  </tr>
                  <tr>
                    <td class="tg-0lax">First Class Concession</td>
                    <td class="tg-0lax">FCP</td>
                    <td class="tg-0lax">22.50</td>
                    <td class="tg-0lax">27.00</td>
                  </tr>
                  <tr>
                    <td class="tg-0lax">First Class Child</td>
                    <td class="tg-0lax">FCC</td>
                    <td class="tg-0lax">21.00</td>
                    <td class="tg-0lax">24.00</td>
                  </tr>
                </table>
                </div>
            </div>

            <!--  Now Showing  -->
            <div id= "Now Showing">
              <div id = "banner"> NOW SHOWING</div>
                <div id= "colomn">Colomn 
                  <div class="row">
                        <div class="column_20">
                            <div class="content">
                                <img src="../../media/Alita.jpg" alt="Mountains" style="width:100%">
                                <h3>Alita</h3>
                                <p>Alita is a creation from an age of despair. Found by the mysterious Dr. Ido while trolling for cyborg parts, Alita becomes a lethal, dangerous being.</p>
                            </div>
                        </div>
                    <div class="column_20">
                            <div class="content">
                                <img src="../../media/avengers-infinity-war-poster" alt="Lights" style="width:100%">
                                <h3>Avengers Infinity Wars</h3>
                                <p>The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe. ... The mad titan</p>
                            </div>
                        </div>
                    <div class="column_20">
                          <div class="content">
                            <img src="../../media/Blade Runner.jpg" alt="Nature" style="width:100%">
                            <h3>Blade Runner</h3>
                            <p>In 2049, replicants (described as "bioengineered humans") are slaves. K, a replicant, works for the Los Angeles Police Department (LAPD) as a "blade runner," an officer who hunts and "retires" (kills) rogue replicants.</p>
                          </div>
                       </div>
                    <div class="column_20">
                      <div class="content">
                        <img src="../../media/limitless.jpg" alt="Mountains" style="width:100%">
                        <h3>limitless</h3>
                        <p>Limitless is a 2011 American science fiction thriller film directed by Neil Burger and written by Leslie Dixon. ... The film follows Edward Morra, a struggling writer who is introduced to a nootropic drug called NZT-48, which gives him the ability to fully utilize his brain and vastly improve his lifestyle.</p>
                      </div>
                    </div>
                 </div>
               </div>
            </div>

            <!--  FOOTER  -->
            <div id= "footer"></div>
        </div><!--  END CONTAINER  -->
    </body>
</html>

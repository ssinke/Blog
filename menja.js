
    var style_cookie_name = "style" ;
    var style_cookie_duration = 30 ;
    
    function switch_style ( css_title )
    {
      var i, link_tag ;
      for (i = 0, link_tag = document.getElementsByTagName("link") ;
           i < link_tag.length ;
           i++ ) {
        if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
            link_tag[i].title) {
          link_tag[i].disabled = true ;
          if (link_tag[i].title == css_title) {
            link_tag[i].disabled = false ;
          }
        }
        set_cookie( style_cookie_name, css_title,
                   style_cookie_duration );
      }
    }
    
    function set_cookie ( cookie_name, cookie_value,
                         lifespan_in_days, valid_domain )
    {
      var domain_string = valid_domain ?
          ("; domain=" + valid_domain) : '' ;
      document.cookie = cookie_name +
        "=" + encodeURIComponent( cookie_value ) +
        "; max-age=" + 60 * 60 *
        24 * lifespan_in_days +
        "; path=/" + domain_string ;
    }
    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) {
        var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  return "";
}
   
   function checkCookie() {
     var stil=getCookie("style");
     if (stil != "") {
       switch_style(stil);
     }
   }
   
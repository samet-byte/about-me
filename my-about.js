window.addEventListener("load", function() {
    (function() {
      var openComment, styles, time, writeStyleChar, writeStyles;
  
      // Function to load external CSS file
      function loadExternalStyles(callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'part1.css', true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
          }
        };
        xhr.send();
      }
  
      openComment = false;
  
      writeStyleChar = function(which) {
        if (which === '/' && openComment === false) {
          openComment = true;
          styles = $('#style-text').html() + which;
        } else if (which === '/' && openComment === true) {
          openComment = false;
          styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
        } else if (which === ':') {
          styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
        } else if (which === ';') {
          styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
        } else if (which === '{') {
          styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
        } else {
          styles = $('#style-text').html() + which;
        }
        $('#style-text').html(styles);
        return $('#style-tag').append(which);
      };
  
      writeStyles = function(message, index, interval) {
        var pre;
        if (index < message.length) {
          pre = document.getElementById('style-text');
          pre.scrollTop = pre.scrollHeight;
          writeStyleChar(message[index++]);
          return setTimeout(function() {
            return writeStyles(message, index, interval);
          }, interval);
        }

      };
  

      $('body').append("  <div id=\"server\"><style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"rocknrollbaby\"><i></i></span>\n<pre id=\"style-text\"></pre></div>");
      
  
      // Add a new div for infinite dots
      $('body').append("<div id='infinite-dots'></div>");
    //   <!-- $('body').append("<h1>Hover Me!</>"); -->
  
      // Function to add dots infinitely
      function addDot() {
        var dot = $("<span>.</span>");
        var maxX = $(window).width() - 20;
        var maxY = $(window).height() - 20;
        var randomX = Math.floor(Math.random() * maxX);
        var randomY = Math.floor(Math.random() * maxY);
        
        dot.css({
          position: 'absolute',
          left: randomX + 'px',
          top: randomY + 'px',
          color: 'white',
          fontSize: '20px',
          opacity: 0
        });
  
        $('#infinite-dots').append(dot);
  
        dot.animate({opacity: 1}, 1000, function() {
          setTimeout(function() {
            dot.fadeOut(1000, function() {
              dot.remove();
            });
          }, 2000);
        });
  
        setTimeout(addDot, 50);  // Add a new dot every 200ms
      }
  
      // Start adding dots
      addDot();
  
      time = window.innerWidth <= 578 ? 4 : 16;
      time = 25;
      // time = 100 * .25;
      // time = .1;
  
      // Load and apply styles
      loadExternalStyles(function(stylesContent) {
        styles = stylesContent;
        writeStyles(styles, 0, time);
      });
  
    }).call(this);
  });




  










